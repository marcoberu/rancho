export class FormatNumber {
  static instance: Intl.NumberFormat | null;

  static getInstance = () => {
    if (this.instance) {
      return this.instance;
    }
    return new Intl.NumberFormat(`mx-MX`, {
      style: 'currency',
      currency: `MXN`,
    });
  };

  static formatPrice = (number: number): string => {
    return this.getInstance().format(number);
  };

  static format = (number: number): string => {
    return new Intl.NumberFormat('mx-MX').format(number);
  };
}
