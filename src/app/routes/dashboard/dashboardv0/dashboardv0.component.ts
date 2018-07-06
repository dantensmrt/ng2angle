import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ColorsService } from '../../../shared/colors/colors.service';

@Component({
    selector: 'app-dashboardv0',
    templateUrl: './dashboardv0.component.html',
    styleUrls: ['./dashboardv0.component.scss']
})
export class Dashboardv0Component implements OnInit {

    // Chart options settings
    areaOptionsCash = {
        series: {
            lines: {
                show: true,
                fill: 0.8
            },
            points: {
                show: true,
                radius: 4
            }
        },
        grid: {
            borderColor: '#eee',
            borderWidth: 1,
            hoverable: true,
            backgroundColor: '#fcfcfc'
        },
        tooltip: true,
        tooltipOpts: {
            content: function (label, x, y) { return x + ' : ' + y; }
        },
        xaxis: {
            tickColor: '#fcfcfc',
            mode: 'categories'
        },
        yaxis: {
            min: 0,
            tickColor: '#eee',
            // position: ($scope.app.layout.isRTL ? 'right' : 'left'),
            tickFormatter: function (v) {
                return v + ' $k';
            }
        },
        shadowSize: 0
    };

    getData: any = {};
    notifications: any = [];
    buildings: any = [];

    constructor(public colors: ColorsService, public http: HttpClient) {
        http.get('assets/server/data/dashboard/data.json').subscribe(data => {
            // Assign response data to a data object
            this.getData = data;
            // Assign the alert array from the response to a data object (for display)
            this.notifications = this.getData.notifications;
            // Assign the buildings array of metrics from the response
            this.buildings = this.getData.buildings;

            // Sort the array of buildings by name
            this.buildings.sort(function (item1, item2) {
                if (item1.name < item2.name) {
                    return -1;
                } else if (item1.name > item2.name) {
                    return 1;
                } else {
                    return 0;
                }
            });

            for (let i = 0; i < this.buildings.length; i++) {
                if (this.buildings[i].charts.cashflow.display) {
                    // Set cash flow chart options for this
                    const config = this.areaOptionsCash;

                    // Set the minimum Y axis value given this chart data
                    config.yaxis.min = this.calcChartMin(this.buildings[i].charts.cashflow.data[0].data);

                    this.buildings[i].charts.cashflow.options = config;
                }
            }
        });
    }

    calcChartMin(inData: Array<any>): number {
        let lowVal: number;
        let retVal: number;

        // Fetch the lowest value
        for (let j = 0; j < inData.length; j++) {
            const element = inData[j][1];

            if (j === 0) {
                lowVal = element;
            }

            if (element < lowVal) {
                lowVal = element;
            }
        }

        retVal = Math.round(lowVal * .95);

        console.log('DEBUG: returning with ' + retVal);
        return retVal;
    }

    ngOnInit() {
    }

}
