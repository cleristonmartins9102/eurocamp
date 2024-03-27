export interface ReadFileSync {
  open: (filePath: string) => Promise<string>
}
