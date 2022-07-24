export const useNamespace = (block: string) => {
  // TODO
  const m = (type?: string) => {
    if (type) {
      return `el-${block}--${type}`
    }
    return ""
  }

  // TODO
  const is = (name: string, value: boolean | undefined) => {
    if (value === true) {
      return `is-${name}`
    }
    return ""
  }

  return {
    m,
    is
  }
}