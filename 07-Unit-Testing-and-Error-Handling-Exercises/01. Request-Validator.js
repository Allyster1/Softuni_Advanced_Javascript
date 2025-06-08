function validateRequest(objectData) {
  const uriPattern = /^[\w.]+$/g;
  const validMethods = ["GET", "POST", "DELETE", "CONNECT"];
  const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  const invalidSymbols = ["<", ">", "\\", "&", "'", '"'];

  if (!validMethods.includes(objectData.method)) {
    throw new Error("Invalid request header: Invalid Method");
  }

  if (
    !objectData.uri ||
    !objectData === "*" ||
    !objectData.uri.match(uriPattern)
  ) {
    throw new Error("Invalid request header: Invalid URI");
  }

  if (!validVersions.includes(objectData.version)) {
    throw new Error("Invalid request header: Invalid Version");
  }

  if (!objectData.hasOwnProperty("message")) {
    throw new Error("Invalid request header: Invalid Message");
  }

  for (const text of objectData.message) {
    if (invalidSymbols.includes(text)) {
      throw new Error("Invalid request header: Invalid Message");
    }
  }

  return objectData;
}

const request = {
  method: "GET",
  uri: "svn.public.catalog",
  version: "HTTP/1.1",
  message: "&copy",
};

console.log(validateRequest(request));
