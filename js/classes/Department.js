export default class Department {
    id;
    locationName;
    address;
    weekHours;
    weekendHours;
    phoneNumber;
    emailAddress;
    mapLocation;
    constructor(
        id,
        locationName,
        address,
        weekHours,
        weekendHours,
        phoneNumber,
        emailAddress,
        mapLocation
    ) {
        this.id = id;
        this.locationName = locationName;
        this.address = address;
        this.weekHours = weekHours;
        this.weekendHours = weekendHours;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
        this.mapLocation = mapLocation;
    }
}