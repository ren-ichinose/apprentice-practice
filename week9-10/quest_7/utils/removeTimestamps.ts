export default function removeTimestamps(data: any): any {
  if (data instanceof Array) {
    return data.map((d) => {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { created_at, updated_at, ...rest } = d;
      return rest;
    });
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { created_at, updated_at, ...rest } = data;
  return rest;
}
