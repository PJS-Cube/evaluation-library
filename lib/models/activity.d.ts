import { BaseInterface } from "./base.interface";
import { IContact } from "./contact";
import { IProject } from "./project";
import { IBaseDocument } from "./base.document";
import { IActivityType } from "./activity.type";
export interface IActivity extends BaseInterface {
    AllDay?: boolean;
    Description?: string;
    Label?: string;
    Location?: string;
    StartOn?: Date;
    EndOn?: Date;
    Duration?: number;
    Status?: number;
    Subject?: string;
    Project?: IProject;
    ActivityType?: IActivityType;
    ActivityStatus?: number;
    Document?: IBaseDocument;
    AppointmentResult?: string;
    AppointmentRescheduled?: boolean;
    RescheduledStartOn?: Date;
    RescheduledEndOn?: Date;
    RescheduledStartOnTime?: Date;
    RescheduledEndOnTime?: Date;
    AppointmentType?: string;
    ActivityContact?: IContact;
}
