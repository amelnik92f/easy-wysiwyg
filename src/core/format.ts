export const format = (commandId: string, value?: string): void => {
  document.execCommand(commandId, false, value);
};
