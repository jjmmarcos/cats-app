import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  showNotification(message: string, type: string): void {
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('');
    if(alertPlaceholder!= null) alertPlaceholder.append(wrapper);

    this.removeNotification(wrapper);
  }

  removeNotification(wrapper: HTMLDivElement) {
    setTimeout(() => {
      wrapper.remove();
    }, 1500);
  }
  
}
