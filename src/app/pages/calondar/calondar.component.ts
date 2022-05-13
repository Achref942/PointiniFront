import { CongesService } from "./../../Service/conges.service";
import { Component, OnInit } from "@angular/core";
import { CalendarOptions } from "@fullcalendar/angular"; // useful for typechecking
import Swal from "sweetalert2"
import { EventsDto } from "src/app/models/EventsDto";
@Component({
  selector: "app-calondar",
  templateUrl: "./calondar.component.html",
  styleUrls: ["./calondar.component.scss"],
})
export class CalondarComponent implements OnInit {
 event: EventsDto[];
  events: any = [];
  constructor(private congeService: CongesService) {}
// not working 
  ngOnInit(): void {
    this.getAllEventsDto()
  }

  async getAllEventsDto() {
    this.congeService.getEventsDto().subscribe((res) => {
      this.events = res;
      event=this.events;
    });
    console.log('22',this.events);
  }

  calendarOptions: CalendarOptions = {

    initialView: "dayGridMonth",
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: this.events,
    eventClick: function (elem) {
      Swal.fire({
        title:"event click !  " + elem,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })    },
  };

  handleDateClick(arg) {
    Swal.fire({
      title:"date click !  " + arg.dateStr,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

}
