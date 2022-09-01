//Required package
var pdf = require("pdf-creator-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("./shift-details-report.html", "utf8");

var options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm",
    // header: {
    //     height: "45mm",
    //     contents: '<div style="text-align: center; font-size: 30px;">Kalna Toll Plaza</div>'
    // },
    footer: {
        height: "5mm",
        contents: {
            // first: 'First page',
            // 2: 'Second page', // Any page number is working. 1-based index
            default: '<div style="text-align:right"> <span style="color: #444;">{{page}}</span>/<span>{{pages}}</span></div>', // fallback value
            // last: 'Last Page'
        }
    }
};

var booths = [
    {
        id: 1,
        amount: 50,
        operator: "Hasib Op1",
        isTollFree: false,
        vehicleNumberUser: "Dhaka Ka-123546",
        barrierOpenTime: "10:00 am",
        barrierCloseTime: "10:01 am",
        shiftTime:"Approved",
        receivedAmount:"12345",
        collectedAmount:"27346"
    },
    {
        id: 2,
        amount: 150,
        operator: "Hasib Op2",
        isTollFree: false,
        vehicleNumberUser: "Dhaka Cha-2423546",
        barrierOpenTime: "10:05 am",
        barrierCloseTime: "10:06 am",
        shiftTime:"Pending",
        receivedAmount:"132345",
        collectedAmount:"22346"
    },
    {
        id: 3,
        amount: 100,
        operator: "Hasib Op3",
        isTollFree: false,
        vehicleNumberUser: "Dhaka Ga-423546",
        barrierOpenTime: "12:00 pm",
        barrierCloseTime: "12:01 pm",
        shiftTime:"Approved",
        receivedAmount:"152345",
        collectedAmount:"234446"
    },
    {
        id: 4,
        amount: 170,
        operator: "Hasib Op4",
        isTollFree: false,
        vehicleNumberUser: "Dhaka Na-3523546",
        barrierOpenTime: "04:00 pm",
        barrierCloseTime: "04:01 pm",
        shiftTime:"Pending",
        receivedAmount:"123245",
        collectedAmount:"442346"
    },
    {
        id: 5,
        amount: 170,
        operator: "Hasib Op5",
        isTollFree: false,
        vehicleNumberUser: "Dhaka Na-3523546",
        barrierOpenTime: "04:00 pm",
        barrierCloseTime: "04:01 pm",
        shiftTime:"Approved",
        receivedAmount:"42345",
        collectedAmount:"22346"
    },
    {
        id: 6,
        amount: 170,
        operator: "Hasib Op6",
        isTollFree: false,
        vehicleNumberUser: "Dhaka Na-3523546",
        barrierOpenTime: "04:00 pm",
        barrierCloseTime: "04:01 pm",
        shiftTime:"Pending",
        receivedAmount:"12345",
        collectedAmount:"442346"
    },
    {
        id: 7,
        amount: 170,
        operator: "Hasib Op7",
        isTollFree: false,
        vehicleNumberUser: "Dhaka Na-3523546",
        barrierOpenTime: "04:00 pm",
        barrierCloseTime: "04:01 pm",
        shiftTime:"Approved",
        receivedAmount:"1345",
        collectedAmount:"23446"
    },
    {
        id: 8,
        amount: 170,
        operator: "Hasib Op8",
        isTollFree: false,
        vehicleNumberUser: "Dhaka Na-3523546",
        barrierOpenTime: "04:00 pm",
        barrierCloseTime: "04:01 pm",
        shiftTime:"Pending",
        receivedAmount:"12345",
        collectedAmount:"2346"
    },
];
const bitmap = fs.readFileSync("favicon.png");
const logo = bitmap.toString('base64');

var document = {
    html: html,
    data: {
        title: 'Kalna Toll Plaza Report',
        logo: logo,
        booths: booths,
        totalCashAmount: '470tk',
        totalCar: 4,
        currentDate: new Date().toLocaleString(),
        generateBy:'Sakib Al Hasan'
    },
    path: "./shift-details-report.pdf",
    type: "",
};
// By default a file is created but you could switch between Buffer and Streams by using "buffer" or "stream" respectively.
pdf
    .create(document, options)
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.error(error);
    });