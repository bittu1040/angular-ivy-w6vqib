import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDeclareVar]'
})
export class DeclareVarDirective {

  @Input()
  set appDeclareVar(context: unknown) {
      this.context.$implicit = this.context.appDeclareVar = context;

      if (!this.hasView) {
          this.vcRef.createEmbeddedView(this.templateRef, this.context);
          this.hasView = true;
      }
  }

  private context: {
      $implicit: unknown;
      appDeclareVar: unknown;
  } = {
      $implicit: null,
      appDeclareVar: null,
  };

  private hasView: boolean = false;

  constructor(
      private templateRef: TemplateRef<any>,
      private vcRef: ViewContainerRef
  ) {}

}