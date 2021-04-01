






function importGeoJSON() {
    const path = 'grid-combined.geojson'

    fetch(path)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log(data);
            makeTabulator(data);
        })
}


console.log('hello world');


importGeoJSON()

function makeTabulator(data) {
    var myDataArray = []

    $.each(data.features, function(index, value) {
        
        if (index < 20) {
            var itemData = value.properties;
            myDataArray.push(itemData);
        }
        
    })

    var table = new Tabulator("#example-table", {
        columns:[
            {title:"BASE_COLOR", field:"BASE_COLOR", width: 70},
            {title:"BASIC_PREM", field:"BASIC_PREM", width: 70},
            {title:"BRACKET_CD", field:"BRACKET_CD", width: 70},
            {title:"BRIDGE_IND", field:"BRIDGE_IND", width: 70},
            {title:"COLOR_TEMP", field:"COLOR_TEMP", width: 70},
            {title:"CONTRACT_N", field:"CONTRACT_N", width: 70},
            {title:"CUID", field:"CUID", width: 70},
            {title:"DECAL_COLOR", field:"DECAL_COLOR"},
            {title:"DECAL_NUMB", field:"DECAL_NUMB"},
            {title:"DESIGNID", field:"DESIGNID"},
            {title:"ENABLED", field:"ENABLED"},
            {title:"FIRSTONPOL", field:"FIRSTONPOL"},
            {title:"FIXTURE_ST", field:"FIXTURE_ST"},
            {title:"GRID_ADDRE", field:"GRID_ADDRE"},
            {title:"INSPECTION", field:"INSPECTION"},
            {title:"INSTALL_DA", field:"INSTALL_DA"},
            {title:"ISWATCHLIG", field:"ISWATCHLIG"},
            {title:"LAMP_CD", field:"LAMP_CD"},
            {title:"LUMENS", field:"LUMENS"},
            {title:"MATERIAL_C", field:"MATERIAL_C"},
            {title:"MOUNT_HEIG", field:"MOUNT_HEIG"},
            {title:"NOM_VOLT", field:"NOM_VOLT"},
            {title:"NONSTANDAR", field:"NONSTANDAR"},
            {title:"NONSTAND_1", field:"NONSTAND_1"},
            {title:"OWNER", field:"OWNER"},
            {title:"PATTERN", field:"PATTERN"},
            {title:"PREMISE_ID", field:"PREMISE_ID"},
            {title:"RELATEDPOL", field:"RELATEDPOL"},
            {title:"STREETLIGH", field:"STREETLIGH"},
            {title:"STYLE", field:"STYLE"},
            {title:"SUBMISSION", field:"SUBMISSION"},
            {title:"SUBTYPECD", field:"SUBTYPECD"},
            {title:"SYMBOLROTA", field:"SYMBOLROTA"},
            {title:"USE_CD", field:"USE_CD"},
            {title:"WATTS", field:"WATTS"},
            {title:"WORKFLOWST", field:"WORKFLOWST"},
            {title:"WORKFUNCTI", field:"WORKFUNCTI"},
            {title:"WORKLOCATI", field:"WORKLOCATI"},
            {title:"WORKREQUES", field:"WORKREQUES"},
            {title:"WORK_EFFEC", field:"WORK_EFFEC"},
            {title:"WORK_REQUE", field:"WORK_REQUE"},
        ],
    });
    table.setData(myDataArray);
} 













