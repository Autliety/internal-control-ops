export function mapObjectChildrenRec(objs: any[], config: any) {
  return objs.map(obj => {
    for (const key in config) {
      // noinspection JSUnfilteredForInLoop
      obj[key] = obj[config[key]];
    }

    if (obj.children)
      obj.children = mapObjectChildrenRec(obj.children, config);
    return obj;
  });
}

export function findChildrenRec(objs: any[], findKey: string, keyValue?: any) {
  if (keyValue === undefined) {
    return undefined;
  }
  for (const obj of objs) {
    if (obj[findKey] === keyValue) {
      return obj;
    }
    if (obj.children) {
      let rec:any = findChildrenRec(obj.children, findKey, keyValue);
      if (rec) {
        return rec;
      }
    }
  }
}

export function deepValue(obj: any, path: string | string[]){
  if (!Array.isArray(path)) path = [path];
  for (let p of path) {
    if (!p) return undefined;
    obj = obj[p];
    if (obj === undefined) return undefined;
  }
  return obj;
}

export function getBase64(file:any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}