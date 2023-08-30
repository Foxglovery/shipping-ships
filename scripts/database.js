const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        { id: 1, name: "Puma Thurmon", portId: 2 },
        { id: 2, name: "Zebra Messing", portId: 4 },
        { id: 3, name: "Lark Hammill", portId: 3 },
        { id: 4, name: "Shloe Cevigny", portId: 1 },
        { id: 5, name: "Cupaul Rarles", portId: 1 }
    ],
    ships: [
        {id:1, name: "Dreams of Debra", haulerId: 2},
        {id:2, name: "Inline Fury", haulerId: 3},
        {id:3, name: "Marscapone Somersault", haulerId: 4},
        {id:4, name: "Shame The Duck", haulerId: 1},
        {id:5, name: "Dirty 30's", haulerId: 1},
        {id:6, name: "Saskatoon Sarkhead", haulerId: 5},
        {id:7, name: "Flitting Away The Day", haulerId:5 },
        {id:8, name: "Sea-Org", haulerId: 4},
        {id:9, name: "Lusitania", haulerId: 2},
        {id:10, name: "The Burgundian", haulerId: 5},
        {id:11, name: "Darlene's Mechzilla", haulerId: 2},
        {id:12, name: "Krang", haulerId: 3},
        {id:13, name: "The Other Slide", haulerId: 4},
        {id:14, name: "Biscuits and Navy", haulerId:5 },
        {id:15, name: "Good Portions", haulerId:1 },

    ]
}

export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
}

export const getHaulers = () => {
    return database.haulers.map(hauler =>({...hauler}))
}

export const getShips = () => {
    return database.ships.map(ship =>({...ship}))
}