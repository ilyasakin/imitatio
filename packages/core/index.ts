interface IImitatioRoot {
  render(domNodeId: string, template: string): void;
}

export class ImitatioRoot implements IImitatioRoot {
  constructor() {}

  public render(template: string, domNodeId: string = 'root'): void {
    const domRootNode: HTMLElement | null = document.getElementById(domNodeId);
    console.log(domRootNode);

    if (!domRootNode) {
      throw new Error('TODO Error');
    }

    domRootNode.innerHTML = template;
  }
}
