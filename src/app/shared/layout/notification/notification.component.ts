import { Component, OnChanges, Input } from '@angular/core';
import {HttpStatusGroup} from "../../utils/http.helpers";

@Component({
    selector: 'psp-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnChanges {

    @Input() public notification: string;
    public notificationMsg: string;

    ngOnChanges() {
        if (this.notification === HttpStatusGroup.SUCCESS) {
            this.notificationMsg = "Success!"
        } else {
            this.notificationMsg = "Something went wrong..."
        }
    }
}