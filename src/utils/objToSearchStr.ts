const objToSearchStr = (obj: Record<string, string | number>) => {
  // ["a=1", "b=2"]
  const strParis: string[] = [];

  Object.entries(obj).forEach((keyValue) => {
    const [key, value] = keyValue; // [a, 1]
    const pair = key + "=" + String(value); // a=1
    strParis.push(pair);
  }, []);

  // a=1&b=2
  return strParis.join("&");
};

export default objToSearchStr;