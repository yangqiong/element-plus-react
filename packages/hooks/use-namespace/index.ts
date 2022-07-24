export const useNamespace = (block: string) => {
  // TODO
  const m = (type?: string) => {
    return `el-${block}--${type}`
  }

  return {
    m
  }
}