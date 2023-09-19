import React  from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

 

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function ColumnChart () {
    const options = {
        title: {
            text: "Total Accounts Receivable and Payable Aging"
        },
        data: [
        {
            type: "column",
            dataPoints: [
                { label: "Current",  y: 10  },
                { label: "1-30", y: 15  },
                { label: "31-40", y: 25  },
                { label: "41-50",  y: 30  },
                { label: "51+",  y: 28  }
            ]
        },
        {
            type: "column",
            dataPoints: [
                { label: "Current",  y: 7  },
                { label: "1-30", y: 26  },
                { label: "31-40", y: 13  },
                { label: "41-50",  y: 45  },
                { label: "51+",  y: 5  }
            ]
        }
        ]
    }
    return (
        <CanvasJSChart options = {options}/>
    )
}