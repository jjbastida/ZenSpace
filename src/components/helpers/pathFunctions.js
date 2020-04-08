export const pathWhitelist = (currentPath, pathArray) => pathArray.includes(currentPath);
export const pathBlacklist = (currentPath, pathArray) => !pathArray.includes(currentPath);
