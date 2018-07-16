export const isAInvalidFileSize = (size, minFileSize, maxFileSize) =>
  size < minFileSize || size > maxFileSize

export const isAInvalidDimension = (height, width, minHeight, maxHeight, minWidth, maxWidth) =>
  height < minHeight || height > maxHeight || width < minWidth || width > maxWidth

export const isAInvalidExtension = (extension, acceptedImgExtensions) => {
  const validExtensions = [...acceptedImgExtensions]
  return !validExtensions.includes(extension)
}
