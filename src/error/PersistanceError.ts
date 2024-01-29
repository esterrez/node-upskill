export class PersistanceError extends Error {
  constructor(options: ConstructorParameters<typeof Error>[1]) {
    super("Persistance error", options);
  }

  toJSON() {
    return {
      message: this.message,
    };
  }
}
