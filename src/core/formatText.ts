export const formatText = (commandId: string, value?: string): void => {
  document.execCommand(commandId, false, value);
};
