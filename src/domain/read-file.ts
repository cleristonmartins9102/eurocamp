export interface ReadFile {
  open: (filePath: string) => Promise<string>
}
