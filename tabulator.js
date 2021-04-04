
/**
 * Notes:
 * This provides a tabular view of the grid-combined geoJSON dataset
 * Total size of dataset is 3788 records. 
 * The full dataset takes a long time to draw so it is recommended to parse it before viewing
 * 
 * Also, I'm doing everything in vanilla javascript such as fetch() and for loops
 */


function importGeoJSON() {
    // imports geoJSON file containing all streetlights data
    const path = 'grid-combined.geojson'    //for the moment, geoJSON file is in same directory as this file

    fetch(path)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            makeTabulator(data);
        })
}

//import fetch geoJSON dataset to get started
importGeoJSON()



function filterData(streetlightsData) {
    // filters streetlights data based on given user parameters

    filteredData = []

    //example filter, select all streetlights where lumens > 40000. This leaves 180 records
    for (let i = 0; i < streetlightsData.length; i++) {
        if (streetlightsData[i].properties['LUMENS'] > 40000) {
            filteredData.push(streetlightsData[i]);
        } 
    }

    return filteredData;
}





function makeTabulator(streetlightsData) {
    //makes tabular view of streetlightsData using Tabulator library
    //tabulator docs: http://tabulator.info/

    streetlightsData = streetlightsData.features;   //streetlightsData.features contains array of all streetlights streetlightsData
    
    const filteredData = filterData(streetlightsData)  //fiilter streetlights data based on user parameters

    let dataArray = []

    for (let i = 0; i < filteredData.length; i++) {
        if (i < 20) {                                      // this is slow to render so I just draw the first 20 records at the moment
            dataArray.push(filteredData[i].properties);    // properties of each item is what contains the info about each streetlight 
        }
    }

    const columnWidth = 150;    //setting pixel width of columns
    
    //creates new table object and fills #example-table div in HTML.
    //column title is mapped to the each field name (column) from geoJSON file.
    const table = new Tabulator("#example-table", {
        columns:[
            {title:"BASE_COLOR", field:"BASE_COLOR", width: columnWidth},
            {title:"BASIC_PREM", field:"BASIC_PREM", width: columnWidth},
            {title:"BRACKET_CD", field:"BRACKET_CD", width: columnWidth},
            {title:"BRIDGE_IND", field:"BRIDGE_IND", width: columnWidth},
            {title:"COLOR_TEMP", field:"COLOR_TEMP", width: columnWidth},
            {title:"CONTRACT_N", field:"CONTRACT_N", width: columnWidth},
            {title:"CUID", field:"CUID", width: columnWidth},
            {title:"DECAL_COLOR", field:"DECAL_COLOR", width: columnWidth},
            {title:"DECAL_NUMB", field:"DECAL_NUMB", width: columnWidth},
            {title:"DESIGNID", field:"DESIGNID", width: columnWidth},
            {title:"ENABLED", field:"ENABLED", width: columnWidth},
            {title:"FIRSTONPOL", field:"FIRSTONPOL", width: columnWidth},
            {title:"FIXTURE_ST", field:"FIXTURE_ST", width: columnWidth},
            {title:"GRID_ADDRE", field:"GRID_ADDRE", width: columnWidth},
            {title:"INSPECTION", field:"INSPECTION", width: columnWidth},
            {title:"INSTALL_DA", field:"INSTALL_DA", width: columnWidth},
            {title:"ISWATCHLIG", field:"ISWATCHLIG", width: columnWidth},
            {title:"LAMP_CD", field:"LAMP_CD", width: columnWidth},
            {title:"LUMENS", field:"LUMENS", width: columnWidth},
            {title:"MATERIAL_C", field:"MATERIAL_C", width: columnWidth},
            {title:"MOUNT_HEIG", field:"MOUNT_HEIG", width: columnWidth},
            {title:"NOM_VOLT", field:"NOM_VOLT", width: columnWidth},
            {title:"NONSTANDAR", field:"NONSTANDAR", width: columnWidth},
            {title:"NONSTAND_1", field:"NONSTAND_1", width: columnWidth},
            {title:"OWNER", field:"OWNER", width: columnWidth},
            {title:"PATTERN", field:"PATTERN", width: columnWidth},
            {title:"PREMISE_ID", field:"PREMISE_ID", width: columnWidth},
            {title:"RELATEDPOL", field:"RELATEDPOL", width: columnWidth},
            {title:"STREETLIGH", field:"STREETLIGH", width: columnWidth},
            {title:"STYLE", field:"STYLE", width: columnWidth},
            {title:"SUBMISSION", field:"SUBMISSION", width: columnWidth},
            {title:"SUBTYPECD", field:"SUBTYPECD", width: columnWidth},
            {title:"SYMBOLROTA", field:"SYMBOLROTA", width: columnWidth},
            {title:"USE_CD", field:"USE_CD", width: columnWidth},
            {title:"WATTS", field:"WATTS", width: columnWidth},
            {title:"WORKFLOWST", field:"WORKFLOWST", width: columnWidth},
            {title:"WORKFUNCTI", field:"WORKFUNCTI", width: columnWidth},
            {title:"WORKLOCATI", field:"WORKLOCATI", width: columnWidth},
            {title:"WORKREQUES", field:"WORKREQUES", width: columnWidth},
            {title:"WORK_EFFEC", field:"WORK_EFFEC", width: columnWidth},
            {title:"WORK_REQUE", field:"WORK_REQUE", width: columnWidth},
        ],
    });

    //set data into table object
    table.setData(dataArray);
} 













