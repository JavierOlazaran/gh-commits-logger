import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeUrl'
})
export class SanitizeUrlPipe implements PipeTransform {
  sanitizedWidgetUrl: SafeResourceUrl = ''

  constructor(
    private sanitizer: DomSanitizer,
  ){}

  transform(url: string): SafeResourceUrl {
    return this.sanitizedWidgetUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.sanitizer.sanitize(SecurityContext.URL, url) ?? ''
    );
  }
}
