class HomeRenovation {
  constructor(budget) {
    this.budget = budget;
    this.tasks = [];
    this.completedTasks = [];
  }

  addTask(description, cost, priority) {
    if (
      typeof description !== "string" ||
      typeof cost !== "number" ||
      typeof priority !== "number"
    ) {
      return;
    }

    if (this.budget < cost) {
      return `Not enough budget to add '${description}' task.`;
    }

    this.budget -= cost;
    this.tasks.push({ description, cost, priority });
    return `The task '${description}' has been successfully added to the renovation plan.`;
  }

  markTaskAsCompleted(description) {
    if (typeof description !== "string") {
      return;
    }
    const taskIndex = this.tasks.findIndex(
      (task) => task.description === description
    );

    if (taskIndex === -1) {
      throw new Error(
        `Task '${description}' not found in the renovation plan.`
      );
    }

    const [completedTask] = this.tasks.splice(taskIndex, 1);
    this.completedTasks.push(completedTask);

    return `The task '${description}' has been successfully completed.`;
  }

  getPriorityTasksCount(minimalPriority) {
    if (typeof minimalPriority !== "number") {
      return;
    }

    if (minimalPriority <= 0) {
      return "The priority cannot be zero or negative.";
    }

    let tasksCount = 0;

    this.tasks.forEach((task) => {
      if (task.priority >= minimalPriority) {
        tasksCount += 1;
      }
    });

    return tasksCount > 0
      ? `You have ${tasksCount} tasks to prioritize.`
      : `No tasks found with priority ${minimalPriority} or higher.`;
  }

  renovationSummary() {
    if (this.completedTasks.length === 0) {
      throw new Error("No tasks have been completed yet!");
    }

    let buffer = [];

    const budgetLeft = `Budget left $${this.budget}.`;
    buffer.push(budgetLeft);

    const completedCounter = `You have completed ${this.completedTasks.length} tasks.`;
    buffer.push(completedCounter);

    buffer.push("Pending tasks in the renovation plan:");
    this.tasks.forEach((task) => {
      buffer.push(
        `${task.description} - Cost: ${task.cost}, Priority: ${task.priority}`
      );
    });

    return buffer.join("\n");
  }
}

const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2));
console.log(renovation.addTask("Install new windows", 5000, 1));
console.log(renovation.markTaskAsCompleted("Paint walls"));
console.log(renovation.renovationSummary());

// The task 'Paint walls' has been successfully added to the renovation plan.
// The task 'Install new windows' has been successfully added to the renovation plan.
// The task 'Paint walls' has been successfully completed.
// Budget left $3500.
// You have completed 1 tasks.
// Pending tasks in the renovation plan:
// Install new windows - Cost: 5000, Priority: 1
