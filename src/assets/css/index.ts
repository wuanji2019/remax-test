

// 加载css文件列表
const includes = []
const requireContext = require.context('./', false, /\.(c|sa|sc|le)ss$/)
const requireColorUiContext = require.context('./colorui/', false, /\.(c|sa|sc|le)ss$/)

requireContext.keys().forEach((fileName: any) => {
  if (includes.length) {
  } else {
    requireContext(fileName)
  }
})

requireColorUiContext.keys().forEach((fileName: any) => {
  if (includes.length) {
  } else {
    requireColorUiContext(fileName)
  }
})