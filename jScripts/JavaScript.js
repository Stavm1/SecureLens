var totalThreatCount; //משתנה לניקוד האיום
var protectionRequirementsText = ""; //משתנה לטקסט דרישות ההגנה
var infoTypeText = ""; //משתנה לטקסט הערת סוג המידע

//משתנים לכותרות של הדרישות - על מנת שאותה כותרת לא תופיע פעמיים במקרה של מס' דרישות
var addedCategory_Hizdahut = false;
var addedCategory_Harshaaot = false;
var addedCategory_Memashkim = false;
var addedCategory_Login = false;
var addedCategory_Audit = false;
var addedCategory_Recovery = false;
var addedCategory_MediaDisposal = false;
var addedCategory_EquipmentNetworkTransfer = false;
var addedCategory_ServerRoomSecurity = false;
var addedCategory_OfficeSecurity = false;
var addedCategory_SupplyChain = false;


function submitForm() { //פונקציה שתשמור את הנתונים שהוזמנו ותשכלל אותן

    totalThreatCount = 0; //איפוס מהבדיקה הקודמת

    var hasError = false; //משתנה להצגת שגיאה במקרה של אי-מילוי שדות חובה (לעיתים הן בהתנייה על כן נדרש משתנה ייעודי)


    // איפוס כותרות דרישות
addedCategory_Hizdahut = false;
addedCategory_Harshaaot = false;
addedCategory_Memashkim = false;
addedCategory_Login = false;
addedCategory_Audit = false;
addedCategory_Recovery = false;
addedCategory_MediaDisposal = false;
addedCategory_EquipmentNetworkTransfer = false;
addedCategory_ServerRoomSecurity = false;
addedCategory_OfficeSecurity = false;
    addedCategory_SupplyChain = false;

    //איפוס הצגת הערת סוגי הנתונים למעלה
    showNote = false; 

    // איפוס שגיאות בתחילת הבדיקה
    document.getElementById("generalFormError").innerHTML = ""; 
    document.getElementById("generalFormError").innerHTML = ""; 
    document.getElementById("remoteAccessDeviceError").innerHTML = ""; 
    document.getElementById("systemNameError").innerHTML = "";
    document.getElementById("systemSecurityManagerError").innerHTML = "";
    document.getElementById("serversPhysicalSecurityError").innerHTML = "";
    document.getElementById("firewallError").innerHTML = "";
    document.getElementById("antivirusError").innerHTML = "";
    document.getElementById("antivirusUpdateError").innerHTML = "";
    document.getElementById("systemAuthorizationError").innerHTML = "";
    document.getElementById("fishingSecurityError").innerHTML = "";
    document.getElementById("moreSecurityToolsError").innerHTML = "";
    document.getElementById("multiStepValidationError").innerHTML = "";
    document.getElementById("eventsHistoryError").innerHTML = "";
    document.getElementById("recoveryPlanError").innerHTML = "";
    document.getElementById("autoBackupError").innerHTML = "";
    document.getElementById("systemConnectionError").innerHTML = "";
    document.getElementById("otherSystemsConnectionNumError").innerHTML = "";
    document.getElementById("otherSystemsSafeError").innerHTML = "";
    document.getElementById("externalDependencyError").innerHTML = "";
    document.getElementById("networkTypeError").innerHTML = "";
    document.getElementById("recoveryTimeError").innerHTML = "";
    document.getElementById("cyberDrillError").innerHTML = "";
    document.getElementById("manualUpdateSwitchError").innerHTML = "";
    document.getElementById("usersNumError").innerHTML = "";
    document.getElementById("workFromHomeError").innerHTML = "";
    document.getElementById("externalUsersAccessError").innerHTML = "";
    document.getElementById("systemAdminTypeError").innerHTML = "";
    document.getElementById("awarenessError").innerHTML = "";
    document.getElementById("trainingFrequencyError").innerHTML = "";
    document.getElementById("employeeSecurityChecksError").innerHTML = "";
    document.getElementById("unauthorizedAccessAttemptsError").innerHTML = "";
    document.getElementById("systemMonitoringError").innerHTML = "";
    document.getElementById("securityPolicyError").innerHTML = "";
    document.getElementById("standardComplianceError").innerHTML = "";
    document.getElementById("maxDamageLevelError").innerHTML = "";
    document.getElementById("damageImpactError").innerHTML = "";
    document.getElementById("cyberIncidentHistoryError").innerHTML = "";
    document.getElementById("immunityLevelError").innerHTML = "";
    document.getElementById("classificationError").innerHTML = "";









    var nameValue = document.getElementById("systemName").value; //שמירת שם המערכת
    if (nameValue == "") {
        document.getElementById("systemNameError").innerHTML = "יש למלא את שם המערכת.";
        hasError = true;
    }

    // קריאת כפתור רדיו מסומן - מידע המערכת:
    var DataRadios = document.getElementsByName("systemData"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var dataValue = ""; //משתנה לשמירת המידע שסומן


    // איפוס הערת השגיאה לפני בדיקה
    document.getElementById("systemDataError").innerHTML = "";

    // בדיקה אם לא נבחר אף צ'קבוקס
    var systemDataSelected = false;


    for (var i = 0; i < DataRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (DataRadios[i].checked) {
            dataValue = DataRadios[i].value;
            systemDataSelected = true;

        
        }
    }

    document.getElementById("generalFormError").innerHTML = ""; //איפוס שגיאה כללית לפני בדיקה

        if (!systemDataSelected) { //אם לא נבחרה אף תיבת סימון בשדה תהיה שגיאה למשתמש
            document.getElementById("systemDataError").innerHTML = "יש לבחור לפחות סוג מידע אחד.";
            hasError = true;
           
        }


        //שינוי המשתנה שאחראי על הצגת הודעת שגיאה כללית אם שדות חובה לא סומנו
    if (!document.querySelector('form').checkValidity()) {
        hasError = true;
    }





    var selectedValuesSystemDataArray = [];  // מערך ריק לקליטת הסימון בסוגי הנתונים במערכת
    var indexSystemData = 0; // מונה 
    var showNote = false; //משתנה להצגת או הסתרת ההערה 
    var SystemDataCheckboxes = document.getElementsByName("systemData"); //שליפת הערכים שסומנו 


    for (var i = 0; i < SystemDataCheckboxes.length; i++) { //לולאה לשמירת הבחירות במערך
        if (SystemDataCheckboxes[i].checked) {
            selectedValuesSystemDataArray[indexSystemData] = SystemDataCheckboxes[i].value;
            indexSystemData = indexSystemData + 1;
        }
    }

    for (var j = 0; j < selectedValuesSystemDataArray.length; j++) { //מעבר על כל המערך כדי לראות אם יש ערך שסומן ומצריך הערה
        if (selectedValuesSystemDataArray[j] == "מידע אישי" ||
            selectedValuesSystemDataArray[j] == "מידע פיננסי" ||
            selectedValuesSystemDataArray[j] == "מידע רפואי") {
            showNote = true; //הצגת ההערה
        }
    }

    if (showNote) { //אם המשתנה להצגת ההערה - כן"
        infoTypeText = "<div class=regulationText> שימו לב כי יש לעמוד בתקן רגולציה מתאים לסוג המידע שנבחר. </div>";
        document.getElementById("regulationNote").innerHTML = infoTypeText;
    } else { //אם הוא על - לא
        document.getElementById("regulationNote").innerHTML = "";
    }






    //  - מנהל המערכת - קריאת כפתור רדיו מסומן:
    var systemSecurityManagerRadios = document.getElementsByName("systemSecurityManager"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var systemSecurityManagerValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < systemSecurityManagerRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (systemSecurityManagerRadios[i].checked) {
            systemSecurityManagerValue = systemSecurityManagerRadios[i].value;
        }
    }

    if (systemSecurityManagerValue == "") {
        document.getElementById("systemSecurityManagerError").innerHTML = "יש לבחור את מנהל המערכת.";
        hasError = true;
    }


    //הוספת ניקוד לאיום למול בחירת אחראי המערכת
    if (systemSecurityManagerValue == "ללא אחראי") {
        totalThreatCount += 2;
    }
    else if (systemSecurityManagerValue == "מנהל אבטחת המידע") {
        totalThreatCount += 0;
    }
    else {
        totalThreatCount += 1; //  כל תפקיד אחר - נע"ת
    }







    //  האם השרתים מאובטחים פיזית - קריאת כפתור רדיו מסומן:
    var serversPhysicalSecurityRadios = document.getElementsByName("serversPhysicalSecurity"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var serversPhysicalSecurityValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < serversPhysicalSecurityRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (serversPhysicalSecurityRadios[i].checked) {
            serversPhysicalSecurityValue = serversPhysicalSecurityRadios[i].value;
        }
    }

    // בדיקת שגיאה – אם לא נבחר כלום
    if (serversPhysicalSecurityValue == "") {
        document.getElementById("serversPhysicalSecurityError").innerHTML = "יש לסמן האם השרתים מאובטחים פיזית.";
        hasError = true;
    }

    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (serversPhysicalSecurityValue == "לא") {
        totalThreatCount += 1;
    }



    //  האם יש חומת אש - קריאת כפתור רדיו מסומן:
    var firewallRadios = document.getElementsByName("firewall"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var firewallValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < firewallRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (firewallRadios[i].checked) {
            firewallValue = firewallRadios[i].value;
        }
    }

    // בדיקת שגיאה – אם לא נבחר כלום
    if (firewallValue == "") {
        document.getElementById("firewallError").innerHTML = "יש לסמן האם קיימת חומת אש.";
        hasError = true;
    }

    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (firewallValue == "לא") {
        totalThreatCount += 2;
    }



    //  האם יש אנטי וירוס - קריאת כפתור רדיו מסומן:
    var AntivirusRadios = document.getElementsByName("Antivirus"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var AntivirusValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < AntivirusRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (AntivirusRadios[i].checked) {
            AntivirusValue = AntivirusRadios[i].value;
        }
    }

    // בדיקת שגיאה – אם לא נבחר כלום
    if (AntivirusValue == "") {
        document.getElementById("antivirusError").innerHTML = "יש לסמן האם מותקן אנטי וירוס.";
        hasError = true;
    }


    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (AntivirusValue == "לא") {
        totalThreatCount += 2;
    }



    //  האם האנטי וירוס מתעדכן - קריאת כפתור רדיו מסומן:
    var AntivirusUpdateRadios = document.getElementsByName("AntivirusUpdate"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var AntivirusUpdateValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < AntivirusUpdateRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (AntivirusUpdateRadios[i].checked) {
            AntivirusUpdateValue = AntivirusUpdateRadios[i].value;
        }
    }

    // בדיקת שגיאה – אם לא נבחר כלום
    if (AntivirusUpdateValue == "") {
        document.getElementById("antivirusUpdateError").innerHTML = "יש לסמן האם האנטי וירוס מתעדכן.";
        hasError = true;
    }


    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (AntivirusUpdateValue == "לא") {
        totalThreatCount += 1;
    }




    //  - הרשאות גישה למערכת - קריאת כפתור רדיו מסומן:
    var systemAuthorizationRadios = document.getElementsByName("systemAuthorization"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var systemAuthorizationValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < systemAuthorizationRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (systemAuthorizationRadios[i].checked) {
            systemAuthorizationValue = systemAuthorizationRadios[i].value;
        }
    }

    if (systemAuthorizationValue == "") {
        document.getElementById("systemAuthorizationError").innerHTML = "יש לסמן כיצד מנוהלות הרשאות גישה.";
        hasError = true;
    }


    //הוספת ניקוד לאיום למול בחירת אחראי המערכת
    if (systemAuthorizationValue == "על פי המחלקה") {
        totalThreatCount += 1;
    }
    else if (systemAuthorizationValue == "אין מידור בהרשאות") {
        totalThreatCount += 2;
    }





    //  האם יש כלי הגנה מפני פישינג- קריאת כפתור רדיו מסומן:
    var fishingSecurityRadios = document.getElementsByName("fishingSecurity"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var fishingSecurityValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < fishingSecurityRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (fishingSecurityRadios[i].checked) {
            fishingSecurityValue = fishingSecurityRadios[i].value;
        }
    }

    // אם לא נבחר כלום – הוספת שגיאה
    if (fishingSecurityValue == "") {
        document.getElementById("fishingSecurityError").innerHTML = "יש לסמן האם קיימים כלי הגנה מפני פישינג.";
        hasError = true;
    }

    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (fishingSecurityValue == "לא") {
        totalThreatCount += 1;
    }




    

    //  האם יש כלי הגנה נוספים במערכת - קריאת כפתור רדיו מסומן:
    var MoreSecurityToolsRadios = document.getElementsByName("moreSecurityTools"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var MoreSecurityToolsValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < MoreSecurityToolsRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (MoreSecurityToolsRadios[i].checked) {
            MoreSecurityToolsValue = MoreSecurityToolsRadios[i].value;
        }
    }


    // בדיקת שגיאה – אם לא נבחר כלום
if (MoreSecurityToolsValue == "") {
    document.getElementById("moreSecurityToolsError").innerHTML = "יש לסמן האם קיימים כלי הגנה נוספים.";
    hasError = true;
}

    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (MoreSecurityToolsValue == "לא") {
        totalThreatCount += 1;
    }





    //  האם יש אימות רב שלבי - קריאת כפתור רדיו מסומן:
    var MultiStepValidationRadios = document.getElementsByName("multiStepValidation"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var MultiStepValidationValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < MultiStepValidationRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (MultiStepValidationRadios[i].checked) {
            MultiStepValidationValue = MultiStepValidationRadios[i].value;
        }
    }

    // בדיקת שגיאה – אם לא נבחר כלום
    if (MultiStepValidationValue == "") {
        document.getElementById("multiStepValidationError").innerHTML = "יש לסמן האם קיים אימות רב שלבי.";
        hasError = true;
    }


    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (MultiStepValidationValue == "לא") {
        totalThreatCount += 1;
    }





    //  האם נרשמה היסטוריית אירועים חריגים אשר גרמה לפגיעה משמעותית במערכת המידע - קריאת כפתור רדיו מסומן:
    var EventsHistoryRadios = document.getElementsByName("eventsHistory"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var EventsHistoryValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < EventsHistoryRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (EventsHistoryRadios[i].checked) {
            EventsHistoryValue = EventsHistoryRadios[i].value;
        }
    }

    // בדיקת שגיאה – אם לא נבחר כלום
    if (EventsHistoryValue == "") {
        document.getElementById("eventsHistoryError").innerHTML = "יש לסמן האם נרשמה היסטוריית אירועים חריגים.";
        hasError = true;
    }


    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (EventsHistoryValue == "כן") {
        totalThreatCount += 1;
    }



    //  האם קיימת תכנית התאוששות במקרה של תקיפה או כשל במערכת - קריאת כפתור רדיו מסומן:
    var RecoveryPlanRadios = document.getElementsByName("recoveryPlan"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var RecoveryPlanValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < RecoveryPlanRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (RecoveryPlanRadios[i].checked) {
            RecoveryPlanValue = RecoveryPlanRadios[i].value;
        }
    }

    // בדיקת שגיאה – אם לא נבחר כלום
    if (RecoveryPlanValue == "") {
        document.getElementById("recoveryPlanError").innerHTML = "יש לסמן האם קיימת תכנית התאוששות.";
        hasError = true;
    }

    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (RecoveryPlanValue == "לא") {
        totalThreatCount += 1;
    }



    //  האם יש גיבוי אוטומטי למערכת - קריאת כפתור רדיו מסומן:
    var AutoBackupRadios = document.getElementsByName("autoBackup"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var AutoBackuplanValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < AutoBackupRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (AutoBackupRadios[i].checked) {
            AutoBackuplanValue = AutoBackupRadios[i].value;
        }
    }

    // בדיקת שגיאה – אם לא נבחר כלום
    if (AutoBackuplanValue == "") {
        document.getElementById("autoBackupError").innerHTML = "יש לסמן האם יש גיבוי אוטומטי למערכת.";
        hasError = true;
    }

    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (AutoBackuplanValue == "לא") {
        totalThreatCount += 1;
    }




    //  האם המערכת מחוברת לרשת פנימית או אינטרנט - קריאת כפתור רדיו מסומן:
    var systemConnectionRadios = document.getElementsByName("systemConnection"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var systemConnectionValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < systemConnectionRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (systemConnectionRadios[i].checked) {
            systemConnectionValue = systemConnectionRadios[i].value;
        }
    }

    // בדיקת שגיאה – אם לא נבחר כלום
    if (systemConnectionValue == "") {
        document.getElementById("systemConnectionError").innerHTML = "יש לסמן האם המערכת מחוברת לרשת פנימית או אינטרנט.";
        hasError = true;
    }

    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (systemConnectionValue == "אינטרנט") {
        totalThreatCount += 1;
    }





    //  כמה מערכות נוספות מתחברות למערכת - קריאת כפתור רדיו מסומן:
    var otherSystemsConnectionNumRadios = document.getElementsByName("otherSystemsConnectionNum"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var otherSystemsConnectionNumValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < otherSystemsConnectionNumRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (otherSystemsConnectionNumRadios[i].checked) {
            otherSystemsConnectionNumValue = otherSystemsConnectionNumRadios[i].value;
        }
    }

    // בדיקת שגיאה – אם לא נבחר כלום
    if (otherSystemsConnectionNumValue == "") {
        document.getElementById("otherSystemsConnectionNumError").innerHTML = "יש לסמן כמה מערכות נוספות מתחברות למערכת.";
        hasError = true;
    }


    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (otherSystemsConnectionNumValue == "עד 2 מערכות") {
        totalThreatCount += 1;
    }


    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (otherSystemsConnectionNumValue == "3-5 מערכות") {
        totalThreatCount += 2;
    }


    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (otherSystemsConnectionNumValue == "מעל 5 מערכות") {
        totalThreatCount += 3;
    }





    //  האם יש הבדל ברמת חסינותן של המערכות המתחברות? - קריאת כפתור רדיו מסומן:
    var otherSystemsSafeRadios = document.getElementsByName("otherSystemsSafe"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var otherSystemsSafeValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < otherSystemsSafeRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (otherSystemsSafeRadios[i].checked) {
            otherSystemsSafeValue = otherSystemsSafeRadios[i].value;
        }
    }

    // בדיקת שגיאה – אם לא נבחר כלום
    if (otherSystemsSafeValue == "") {
        document.getElementById("otherSystemsSafeError").innerHTML = "יש לסמן האם יש הבדל ברמת חסינותן של המערכות המתחברות.";
        hasError = true;
    }

    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (otherSystemsSafeValue == "כן") {
        totalThreatCount += 2;
    }


    //  האם יש הבדל ברמת חסינותן של המערכות המתחברות? - קריאת כפתור רדיו מסומן:
    var externalDependencyRadios = document.getElementsByName("externalDependency"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var externalDependencyValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < externalDependencyRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (externalDependencyRadios[i].checked) {
            externalDependencyValue = externalDependencyRadios[i].value;
        }
    }

    // בדיקת שגיאה – אם לא נבחר כלום
    if (externalDependencyValue == "") {
        document.getElementById("externalDependencyError").innerHTML = "יש לסמן האם קיימת תלות בגורם חיצוני.";
        hasError = true;
    }

    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (externalDependencyValue == "כן") {
        totalThreatCount += 1;
    }





    //  האם הרשת פרוסה קווית או אלחוטית - קריאת כפתור רדיו מסומן:
    var networkTypeRadios = document.getElementsByName("networkType"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var networkTypeValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < networkTypeRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (networkTypeRadios[i].checked) {
            networkTypeValue = networkTypeRadios[i].value;
        }
    }

    // בדיקת שגיאה – אם לא נבחר כלום
    if (networkTypeValue == "") {
        document.getElementById("networkTypeError").innerHTML = "יש לסמן האם הרשת פרוסה קווית או אלחוטית.";
        hasError = true;
    }

    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (networkTypeValue == "אלחוטית") {
        totalThreatCount += 1;
    }






    //  כמה זמן לוקח להתאוששות מאירוע סייבר - קריאת כפתור רדיו מסומן:
    var recoveryTimeRadios = document.getElementsByName("recoveryTime"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var recoveryTimeValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < recoveryTimeRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (recoveryTimeRadios[i].checked) {
            recoveryTimeValue = recoveryTimeRadios[i].value;
        }
    }

    if (recoveryTimeValue == "") {
        document.getElementById("recoveryTimeError").innerHTML = "יש לסמן כמה זמן לוקח להתאוששות מאירוע סייבר.";
        hasError = true;
    }

    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (recoveryTimeValue == "4-7 ימים") {
        totalThreatCount += 1;
    }


    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (recoveryTimeValue == "8-14 ימים") {
        totalThreatCount += 2;
    }


    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (recoveryTimeValue == "מעל 14 ימים") {
        totalThreatCount += 3;
    }





    //  האם מבוצע בארגון תרגול על אירועי סייבר במערכות - קריאת כפתור רדיו מסומן:
    var cyberDrillRadios = document.getElementsByName("cyberDrill"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var cyberDrillValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < cyberDrillRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (cyberDrillRadios[i].checked) {
            cyberDrillValue = cyberDrillRadios[i].value;
        }
    }

    // בדיקת שגיאה – אם לא נבחר כלום
    if (cyberDrillValue == "") {
        document.getElementById("cyberDrillError").innerHTML = "יש לסמן האם מבוצע תרגול על אירועי סייבר במערכות.";
        hasError = true;
    }

    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (cyberDrillValue == "לא") {
        totalThreatCount += 1;
    }






    //  האם קיים מנגנון המאפשר מעבר מעדכון אוטומטי לידני על פי צורך - קריאת כפתור רדיו מסומן:
    var manualUpdateSwitchRadios = document.getElementsByName("manualUpdateSwitch"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var manualUpdateSwitchValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < manualUpdateSwitchRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (manualUpdateSwitchRadios[i].checked) {
            manualUpdateSwitchValue = manualUpdateSwitchRadios[i].value;
        }
    }

    // בדיקת שגיאה – אם לא נבחר כלום
    if (manualUpdateSwitchValue == "") {
        document.getElementById("manualUpdateSwitchError").innerHTML = "יש לסמן האם קיים מנגנון לעדכון ידני.";
        hasError = true;
    }

    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (manualUpdateSwitchValue == "לא") {
        totalThreatCount += 1;
    }





    //  כמה משתמשים שונים בעלי גישה למערכת? - קריאת כפתור רדיו מסומן:
    var usersNumRadios = document.getElementsByName("usersNum"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var usersNumValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < usersNumRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (usersNumRadios[i].checked) {
            usersNumValue = usersNumRadios[i].value;
        }
    }

    // בדיקת שגיאה – אם לא נבחר כלום
    if (usersNumValue == "") {
        document.getElementById("usersNumError").innerHTML = "יש לסמן כמה משתמשים בעלי גישה למערכת.";
        hasError = true;
    }


    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (usersNumValue == "11-50 משתמשים") {
        totalThreatCount += 1;
    }


    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (usersNumValue == "51-100 משתמשים") {
        totalThreatCount += 2;
    }


    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (usersNumValue == "מעל 100 משתמשים") {
        totalThreatCount += 3;
    }





    //  האם ניתן להתחבר למערכת מהבית - קריאת כפתור רדיו מסומן:
    var workFromHomeRadios = document.getElementsByName("workFromHome"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var workFromHomeValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < workFromHomeRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (workFromHomeRadios[i].checked) {
            workFromHomeValue = workFromHomeRadios[i].value;
        }
    }

    // בדיקת שגיאה – אם לא נבחר כלום
    if (workFromHomeValue == "") {
        document.getElementById("workFromHomeError").innerHTML = "יש לסמן האם ניתן להתחבר למערכת מהבית.";
        hasError = true;
    }

    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (workFromHomeValue == "כן") {
        totalThreatCount += 1;
    }



    

    //  אם מתחברים מהבית, דרך איזה מחשב מתבצע החיבור - קריאת כפתור רדיו מסומן:
    var remoteAccessDeviceRadios = document.getElementsByName("remoteAccessDevice"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var remoteAccessDeviceValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < remoteAccessDeviceRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (remoteAccessDeviceRadios[i].checked) {
            remoteAccessDeviceValue = remoteAccessDeviceRadios[i].value;
        }
    }

    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (remoteAccessDeviceValue == "מחשב אישי") {
        totalThreatCount += 1;
    }


    // איפוס הודעת השגיאה קודם
    document.getElementById("remoteAccessDeviceError").innerHTML = "";

    // אם ענו "כן" על חיבור מהבית ולא בחרו את סוג המחשב
    if (workFromHomeValue == "כן" && remoteAccessDeviceValue == "") {
        document.getElementById("remoteAccessDeviceError").innerHTML = "יש לסמן דרך איזה מחשב מתבצע החיבור.";
        return;
    }




    //  האם יש גישה למערכת למשתמשים חיצוניים? (לקוחות/ספקים) - קריאת כפתור רדיו מסומן:
    var externalUsersAccessRadios = document.getElementsByName("externalUsersAccess"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var externalUsersAccessValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < externalUsersAccessRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (externalUsersAccessRadios[i].checked) {
            externalUsersAccessValue = externalUsersAccessRadios[i].value;
        }
    }

    if (externalUsersAccessValue == "") {
        document.getElementById("externalUsersAccessError").innerHTML = "יש לסמן אם קיימת גישה למשתמשים חיצוניים.";
        hasError = true;
    }
    

    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (externalUsersAccessValue == "כן") {
        totalThreatCount += 1;
    }




    //  האם מנהל המערכת הוא בחברה או בשירות חיצוני - קריאת כפתור רדיו מסומן:
    var systemAdminTypeRadios = document.getElementsByName("systemAdminType"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var systemAdminTypeValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < systemAdminTypeRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (systemAdminTypeRadios[i].checked) {
            systemAdminTypeValue = systemAdminTypeRadios[i].value;
        }
    }
    // בדיקה אם לא סומן שום ערך
    if (systemAdminTypeValue == "") {
        document.getElementById("systemAdminTypeError").innerHTML = "יש לסמן אם מנהל המערכת הוא מהחברה או משירות חיצוני";
        hasError = true;
    }

    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (systemAdminTypeValue == "שירות חיצוני") {
        totalThreatCount += 1;
    }



    //  האם עובדים עוברים הדרכה בתחום אבטחת המידע? - קריאת כפתור רדיו מסומן:
    var AwarenessRadios = document.getElementsByName("awareness"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var AwarenessValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < AwarenessRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (AwarenessRadios[i].checked) {
            AwarenessValue = AwarenessRadios[i].value;
        }
    }

    if (AwarenessValue == "") {
        document.getElementById("awarenessError").innerHTML = "יש לסמן האם העובדים עוברים הדרכה בתחום אבטחת המידע.";
        formValid = false;
    }

    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (AwarenessValue == "לא") {
        totalThreatCount += 1;
    }



    //  האם ההדרכה מתבצעת באופן עיתי? - קריאת כפתור רדיו מסומן:
    var trainingFrequencyRadios = document.getElementsByName("trainingFrequency"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var trainingFrequencyValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < trainingFrequencyRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (trainingFrequencyRadios[i].checked) {
            trainingFrequencyValue = trainingFrequencyRadios[i].value;
        }
    }

    // איפוס הודעת השגיאה קודם
    document.getElementById("trainingFrequencyError").innerHTML = "";

    // אם ענו "כן" על שאלה האם העובדים עוברים הדרכה, אבל לא נבחרה תדירות
    if (AwarenessValue == "כן" && trainingFrequencyValue == "") {
        document.getElementById("trainingFrequencyError").innerHTML = "יש לסמן האם ההדרכה מתבצעת באופן עיתי.";
        hasError = true;
    }


    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (trainingFrequencyValue == "לא") {
        totalThreatCount += 1;
    }




    //  האם בארגון מתבצעות בדיקות ביטחוניות לעובדים- קריאת כפתור רדיו מסומן:
    var employeeSecurityChecksRadios = document.getElementsByName("employeeSecurityChecks"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var employeeSecurityChecksValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < employeeSecurityChecksRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (employeeSecurityChecksRadios[i].checked) {
            employeeSecurityChecksValue = employeeSecurityChecksRadios[i].value;
        }
    }

    // אם לא נבחרה אף אפשרות – הצגת שגיאה ועדכון hasError
    if (employeeSecurityChecksValue == "") {
        document.getElementById("employeeSecurityChecksError").innerHTML = "יש לסמן אם מתבצעות בדיקות ביטחוניות לעובדים.";
        hasError = true;
    }

    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (employeeSecurityChecksValue == "לא") {
        totalThreatCount += 1;
    }








    //  כמה ניסיונות גישה לא מורשית נרשמו במערכת בחודש האחרון - קריאת כפתור רדיו מסומן:
    var unauthorizedAccessAttemptsRadios = document.getElementsByName("unauthorizedAccessAttempts"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var unauthorizedAccessAttemptsValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < unauthorizedAccessAttemptsRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (unauthorizedAccessAttemptsRadios[i].checked) {
            unauthorizedAccessAttemptsValue = unauthorizedAccessAttemptsRadios[i].value;
        }
    }


    // אם לא נבחרה אף אפשרות – הצגת שגיאה ועדכון hasError
    if (unauthorizedAccessAttemptsValue == "") {
        document.getElementById("unauthorizedAccessAttemptsError").innerHTML = "יש לסמן כמה ניסיונות גישה לא מורשית נרשמו.";
        hasError = true;
    }


    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (unauthorizedAccessAttemptsValue == "6-10 ניסיונות") {
        totalThreatCount += 1;
    }


    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (unauthorizedAccessAttemptsValue == "11-50 ניסיונות") {
        totalThreatCount += 2;
    }


    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (unauthorizedAccessAttemptsValue == "מעל 50 ניסיונות") {
        totalThreatCount += 3;
    }


    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (unauthorizedAccessAttemptsValue == "לא מנוטר, לא ניתן לדעת") {
        totalThreatCount += 4;
    }







    //   האם המערכת מבוקרת באופן שוטף לאיתור פרצות או חולשות - קריאת כפתור רדיו מסומן:
    var systemMonitoringRadios = document.getElementsByName("systemMonitoring"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var systemMonitoringValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < systemMonitoringRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (systemMonitoringRadios[i].checked) {
            systemMonitoringValue = systemMonitoringRadios[i].value;
        }
    }


    // אם לא נבחרה אף אפשרות – הצגת שגיאה ועדכון hasError
    if (systemMonitoringValue == "") {
        document.getElementById("systemMonitoringError").innerHTML = "יש לסמן האם המערכת מבוקרת לאיתור פרצות.";
        hasError = true;
    }


    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (systemMonitoringValue == "לא") {
        totalThreatCount += 1;
    }



    //   האם קיימת מדיניות אבטחת מידע כתובה ומיושמת עבור מערכת זו - קריאת כפתור רדיו מסומן:
    var securityPolicyRadios = document.getElementsByName("securityPolicy"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var securityPolicyValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < securityPolicyRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (securityPolicyRadios[i].checked) {
            securityPolicyValue = securityPolicyRadios[i].value;
        }
    }

    // אם לא נבחרה אף אפשרות – הצגת שגיאה ועדכון hasError
    if (securityPolicyValue == "") {
        document.getElementById("securityPolicyError").innerHTML = "יש לסמן האם קיימת מדיניות אבטחת מידע כתובה.";
        hasError = true;
    }

    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (securityPolicyValue == "לא") {
        totalThreatCount += 1;
    }






    //  האם המערכת עומדת בתקן  - קריאת כפתור רדיו מסומן:
    var standardComplianceRadios = document.getElementsByName("standardCompliance"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var standardComplianceValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < standardComplianceRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (standardComplianceRadios[i].checked) {
            standardComplianceValue = standardComplianceRadios[i].value;
        }
    }

    // אם לא נבחרה אפשרות – הצגת שגיאה ועדכון hasError
    if (standardComplianceValue == "") {
        document.getElementById("standardComplianceError").innerHTML = "יש לסמן האם המערכת עומדת בתקן.";
        hasError = true;
    }


    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (standardComplianceValue == "לא") {
        totalThreatCount += 1;
    }




    //  מהי רמת הנזק המקסימלית שתיגרם לארגון בעקבות חשיפת מידע רגיש  - קריאת כפתור רדיו מסומן:
    var maxDamageLevelRadios = document.getElementsByName("maxDamageLevel"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var maxDamageLevelValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < maxDamageLevelRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (maxDamageLevelRadios[i].checked) {
            maxDamageLevelValue = maxDamageLevelRadios[i].value;
        }
    }

    // אם לא נבחרה אפשרות – הצגת שגיאה ועדכון hasError
    if (maxDamageLevelValue == "") {
        document.getElementById("maxDamageLevelError").innerHTML = "יש לבחור את רמת הנזק המקסימלית.";
        hasError = true;
    }


    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (maxDamageLevelValue == "בינונית") {
        totalThreatCount += 1;

    }

    if (maxDamageLevelValue == "גבוהה") {
        totalThreatCount += 2;

    }

    if (maxDamageLevelValue == "קריטית") {
        totalThreatCount += 3;

    }






    //  האם הנזק יכלול השפעה על פעילות עסקית, פגיעה בתדמית, או עלויות משמעותיות? - קריאת כפתור רדיו מסומן:
    var damageImpactRadios = document.getElementsByName("damageImpact"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var damageImpactValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < damageImpactRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (damageImpactRadios[i].checked) {
            damageImpactValue = damageImpactRadios[i].value;
        }
    }

    // אם לא נבחרה אפשרות – הצגת שגיאה ועדכון hasError
    if (damageImpactValue == "") {
        document.getElementById("damageImpactError").innerHTML = "יש לבחור האם הנזק ישפיע על פעילות עסקית או תדמית.";
        hasError = true;
    }


    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (damageImpactValue == "כן") {
        totalThreatCount += 1;

    }




    //  האם הנזק יכלול השפעה על פעילות עסקית, פגיעה בתדמית, או עלויות משמעותיות? - קריאת כפתור רדיו מסומן:
    var cyberIncidentHistoryRadios = document.getElementsByName("cyberIncidentHistory"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var cyberIncidentHistoryValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < cyberIncidentHistoryRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (cyberIncidentHistoryRadios[i].checked) {
            cyberIncidentHistoryValue = cyberIncidentHistoryRadios[i].value;
        }
    }

    // אם לא נבחרה אפשרות – הצגת שגיאה ועדכון hasError
    if (cyberIncidentHistoryValue == "") {
        document.getElementById("cyberIncidentHistoryError").innerHTML = "יש לבחור האם התרחשו תקריות סייבר בעבר.";
        hasError = true;
    }


    //הוספת ניקוד לאיום למול בחירת המשתמש
    if (cyberIncidentHistoryValue == "כן") {
        totalThreatCount += 1;

    }




    //  מהי מידת החסינות הנדרשת מהמערכת (האם הארגון יכול לתפקד ללא המערכת. לרבות  בהיבטי זמינות ואמינות המערכת)  - קריאת כפתור רדיו מסומן:
    var immunityLevelRadios = document.getElementsByName("immunityLevel"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var immunityLevelValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < immunityLevelRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (immunityLevelRadios[i].checked) {
            immunityLevelValue = immunityLevelRadios[i].value;
        }
    }

    // אם לא נבחרה אפשרות – הצגת שגיאה ועדכון hasError
    if (immunityLevelValue == "") {
        document.getElementById("immunityLevelError").innerHTML = "יש לבחור את מידת החסינות הנדרשת מהמערכת.";
        hasError = true;
    }




    //  מה הסיווג של פריט בודד או צבר המידע במערכת?  - קריאת כפתור רדיו מסומן
    var classificationlRadios = document.getElementsByName("classification"); //רשימת כפתורי הרדיו כדי שנוכל לעבור עליהם ולראות מה סומן
    var classificationValue = ""; //משתנה לשמירת הכפתור שסומן

    for (var i = 0; i < classificationlRadios.length; i++) { //לולאה שעוברת על כפתורי הרדיו על מנת לשמור את זה שסומן
        if (classificationlRadios[i].checked) {
            classificationValue = classificationlRadios[i].value;
        }
    }

    // אם לא נבחרה אפשרות – הצגת שגיאה ועדכון hasError
    if (classificationValue == "") {
        document.getElementById("classificationError").innerHTML = "יש לבחור את סיווג המידע במערכת.";
        hasError = true;
    }






    var resultThreatText = ""; //משתנה להדפסת תוצאת האיום (רמה + הסבר)

    //חישוב איזו רמת סיכון והסבר צריכים להופיע לפי תוצאת האיום המספרית שחושבה

    if (totalThreatCount >= 0 && totalThreatCount <= 12) {
        resultThreatText = "<div class='categoryTitleThreat'>רמת האיום: נמוכה </div>" + "<div class='threatDescription'>המערכת מכילה את רוב דרישות האבטחה הנדרשות. הסיכון להתרחשות אירוע אבטחת מידע משמעותי נחשב נמוך. נדרשים חיזוקים נקודתיים בלבד.</div>";
    }

    if (totalThreatCount >= 13 && totalThreatCount <= 25) {
        resultThreatText = "<div class='categoryTitleThreat'>רמת האיום: בינונית </div>" + "<div class='threatDescription'>קיימים ליקויים במספר תחומים תשתיתיים וארגוניים, אשר מגבירים את החשיפה לאירועי סייבר. נדרשת תוכנית שיפור ממוקדת בטווח הזמן הקצר-בינוני.</div>";
    }

    if (totalThreatCount >= 26 && totalThreatCount <= 38) {
        resultThreatText = "<div class='categoryTitleThreat'>רמת האיום: גבוהה </div>" + "<div class='threatDescription'>המערכת סובלת ממחסור מובהק בדרישות אבטחה בסיסיות ו/או תהליכי בקרה שיטתיים. קיים סיכון ממשי לפגיעה בזמינות, בשלמות או בחיסיון המידע.</div>";
    }

    if (totalThreatCount >= 39 && totalThreatCount <= 51) {
        resultThreatText = "<div class='threatDescription'><div class='categoryTitleThreat'>רמת האיום: קריטית </div>" + "ניכרת חשיפה גבוהה ומתמשכת לאיומי סייבר עקב היעדר דרישות אבטחה הכרחיות. נדרש טיפול מיידי ותיעדוף ארגוני עליון להפחתת רמת הסיכון.</div>";
    }


    // אם נמצאה לפחות שגיאה אחת – מציגים הודעה כללית
    if (hasError) {
        document.getElementById("generalFormError").innerHTML = "שימו לב, יש למלא את כלל שדות החובה.";
        return;
    }



    // המרת המספר לטקסט
    var resultThreatText = resultThreatText.toString();

    protectionRequirementsText = "<div class='RequirementsBigTitle'>דרישות הגנה מומלצות</div>";

    if (classificationValue == "ג - גבוה" || classificationValue == "ד - בינוני" || immunityLevelValue == "1 - קריטית" || immunityLevelValue == "2 - גבוהה מאוד") {


        if (addedCategory_Hizdahut == false) {
            protectionRequirementsText += "<div class='categoryTitle'>הזדהות </div>";
            addedCategory_Hizdahut = true;
        }

        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong>  הזדהות אישית על ידי שם משתמש וסיסמא.<br>" +
            "<strong>בקרות טכנולוגיות: </strong>  סיסמא חזקה.<br>" +
            "<strong>הסבר: </strong>  החלת חובה על שימוש בסיסמאות מורכבות המוחלפות בתדירות המוגדרת." +
            "</div><br/>";
    }

    if (classificationValue == "ג - גבוה" || classificationValue == "ב - גבוה מאוד" || immunityLevelValue == "1 - קריטית" || immunityLevelValue == "2 - גבוהה מאוד" || immunityLevelValue == "3 - גבוהה") {

        if (addedCategory_Hizdahut == false) {
            protectionRequirementsText += "<div class='categoryTitle'>הזדהות </div>";
            addedCategory_Hizdahut = true;
        }

        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong>  זיהוי אישי על אלמנט פיזי המצוי בידי המשתמש (כרטיס חכם).<br>" +
            "<strong>בקרות טכנולוגיות: </strong> הזדהות חזקה בכרטיס חכם.<br>" +
            "<strong>הסבר: </strong> יישום הזדהות מאובטחת על ידי כרטיס חכם תוך הקשת קוד זיהוי." +
            "</div><br/>";
    }


    if (classificationValue == "א - קריטי") {

        if (addedCategory_Hizdahut == false) {
            protectionRequirementsText += "<div class='categoryTitle'>הזדהות </div>";
            addedCategory_Hizdahut = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> הזדהות למערכת באמצעות זיהוי ביומטרי.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> הזדהות ביומטרית.<br>" +
            "<strong>הסבר: </strong> יישום הזדהות מאובטחת על ידי דוגמת טביעת אצבע או רשתית העין." +
            "</div><br/>";
    }



    if (classificationValue == "ג - גבוה" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי" || immunityLevelValue == "1 - קריטית" || immunityLevelValue == "2 - גבוהה מאוד" || immunityLevelValue == "3 - גבוהה") {

        if (addedCategory_Hizdahut == false) {
            protectionRequirementsText += "<div class='categoryTitle'>הזדהות </div>";
            addedCategory_Hizdahut = true;
        }


        protectionRequirementsText += 
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> חידוש הזדהות לאחר פרק זמן של אי שימוש.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> הזדהות חוזרת למשתמש לא פעיל.<br>" +
            "<strong>הסבר: </strong> הגדרת חובת הזדהות חוזרת למשתמש לאחר פרק זמן מסוים שהוגדר מראש." +
            "</div><br/>";
    }


    //דרישות קטגורית הרשאות

    if (classificationValue == "ג - גבוה" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי" || classificationValue == "ד - בינוני" || classificationValue == "ה - נמוך") {

        if (addedCategory_Harshaaot == false) {
            protectionRequirementsText += "<div class='categoryTitle'>הרשאות </div>";
              addedCategory_Harshaaot = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> ניהול מרכזי של מחזור חיים זהויות והרשאות המשתמשים.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> מערכת לניהול IAM/ IDM זהויות והרשאות.<br>" +
            "<strong>הסבר: </strong> יישום מערכת מרכזית לניהול זהויות כל המשתמשים ברשת ובמערכות, עם מחזור חיים החל מקליטת עובד, ניהול תהליך אישורים, הרשאות למערכות שונות, החלפת תפקידים ועד לסיום העסקתו." +
            "</div><br/>";
    }



    if (classificationValue == "ג - גבוה" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי") {


        if (addedCategory_Harshaaot == false) {
            protectionRequirementsText += "<div class='categoryTitle'>הרשאות </div>";
            addedCategory_Harshaaot = true;
        }

        protectionRequirementsText += 
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> ניהול שיוך המשתמשים לקבוצות הרשאה לפי תפקיד ורמת מידור.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> ניהול הרשאות - שיוך לקבוצות - Groups.<br>" +
            "<strong>הסבר: </strong> שימוש ב AD לשיוך כלל המשתמשים לקבוצות בהתאם לתפקידם והרמה הנדרשת, ואשר היישומים יפעלו לאור קבוצות אלו במתן הרשאות בפועל להפעלת המערכת ולשימוש במידע." +
            "</div><br/>";
    }



    if (classificationValue == "ג - גבוה" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי" || classificationValue == "ד - בינוני" || classificationValue == "ה - נמוך" || immunityLevelValue == "1 - קריטית" || immunityLevelValue == "2 - גבוהה מאוד" || immunityLevelValue == "3 - גבוהה") {


        if (addedCategory_Harshaaot == false) {
            protectionRequirementsText += "<div class='categoryTitle'>הרשאות </div>";
            addedCategory_Harshaaot = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> מניעת קיום חשבונות משתמש שאינם בשימוש שוטף.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> יישום תהליך בקרה על חשבונות פעילים.<br>" +
            "<strong>הסבר: </strong> יישום תהליך תקופתי במסגרתו תבוצע בקרה על שימוש בחשבונות משתמש לגורמים פעילים בלבד. חסימת/מחיקת חשבונות שאינם פעילים." +
            "</div><br/>";
    }




    if (classificationValue == "ג - גבוה" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי" || classificationValue == "ד - בינוני" || classificationValue == "ה - נמוך" || immunityLevelValue == "1 - קריטית" || immunityLevelValue == "2 - גבוהה מאוד" || immunityLevelValue == "3 - גבוהה" || immunityLevelValue == "4 - בינונית" || immunityLevelValue == "5 - נמוכה") {



        if (addedCategory_Harshaaot == false) {
            protectionRequirementsText += "<div class='categoryTitle'>הרשאות </div>";
            addedCategory_Harshaaot = true;
        }


        protectionRequirementsText += 
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> ניהול מחזור חיי חשבונות המשתמש ואמצעי הזיהוי לפי נוהל עבודה סדור.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> יישום ניהול זהויות והרשאות.<br>" +
            "<strong>הסבר: </strong> כתיבת נוהל ניהול זהויות והרשאות, בו ייקבע כל מחזסור החיים של חשבונות המשתמש של העובד, כלל ספקים וקבלנים, חשבונות ליישומים וכו. כולל התייחסות לתוקף ופעילות החשבונות גם במערך המחשוב באתר החירום." +
            "</div><br/>";
    }


    //קטגורית ממשקים ותקשורת - דרישות

    if (classificationValue == "א - קריטי" || classificationValue == "ב - גבוה מאוד" || classificationValue == "ג - גבוה" || immunityLevelValue == "1 - קריטית" || immunityLevelValue == "2 - גבוהה מאוד" || immunityLevelValue == "3 - גבוהה") {



        if (addedCategory_Memashkim == false) {
            protectionRequirementsText += "<div class='categoryTitle'>ממשקים ותקשורת </div>";
            addedCategory_Memashkim = true;
        }

        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong>  העברת תוכן בפרוטוקולים מאושרים בלבד בין רשתות.<br>" +
            "<strong>בקרות טכנולוגיות: </strong>  מסנני פרוטוקולים ותוכן.<br>" +
            "<strong>הסבר: </strong>  אכיפת העברת פרוטוקולי תקשורת ותכנים מאושרים בלבד בממשק בין יישומים ורשתות, לפי אפיון הממשקים והיישומים הרצויים באמצעותם." +
            "</div><br/>";
    }



    if (classificationValue == "א - קריטי" || immunityLevelValue == "1 - קריטית") {

        if (addedCategory_Memashkim == false) {
            protectionRequirementsText += "<div class='categoryTitle'>ממשקים ותקשורת </div>";
            addedCategory_Memashkim = true;
        }

        protectionRequirementsText += 
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong>  מניעת האזנה ושיבוש מידע העובר בממשקי התקשורת.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> הצפנת מידע נייד (בתקשורת).<br>" +
            "<strong>הסבר: </strong> הצפנת המידע העובר בממשק, בין אם הצפנת התקשורת או הצפנת התוכנה, תוך מימוש ארכיטקטורה המאפשרת יישום רכיבי סינון." +
            "</div><br/>";
    }



    if (classificationValue == "א - קריטי" || classificationValue == "ב - גבוה מאוד") {

        if (addedCategory_Memashkim == false) {
            protectionRequirementsText += "<div class='categoryTitle'>ממשקים ותקשורת </div>";
            addedCategory_Memashkim = true;
        }

        protectionRequirementsText += 
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> מניעת זליגת מידע רגיש ברמה רשתית באמצעי פרו אקטיבי.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> מניעת זליגת מידע DLP.<br>" +
            "<strong>הסבר: </strong> יישום מערכות לזיהוי חשד לדלף מידע על ידי זיהוי מילות מפתח, מבנים חשודים או היקף תעבורה חריג." +
            "</div><br/>";
    }




    if (classificationValue == "ה - נמוך") {

        if (addedCategory_Memashkim == false) {
            protectionRequirementsText += "<div class='categoryTitle'>ממשקים ותקשורת </div>";
            addedCategory_Memashkim = true;
        }

        protectionRequirementsText += 
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> מניעת זליגת מידע רגיש ברמה רשתית באמצעי פרו אקטיבי.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> secure internet interface.<br>" +
            "<strong>הסבר: </strong> יישום פתרונות לתקשורת דו סיטרית מאובטחת אל ומרשת האינטרנט הגלובלית למטרות שיאושרו כגון: משלוח וקבלת דוא\"ל, גלישה, הורדת קבצים, העלאת קבצים." +
            "</div><br/>";
    }






    if (immunityLevelValue == "1 - קריטית" || immunityLevelValue == "2 - גבוהה מאוד") {

        if (addedCategory_Memashkim == false) {
            protectionRequirementsText += "<div class='categoryTitle'>ממשקים ותקשורת </div>";
            addedCategory_Memashkim = true;
        }

        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> יישום פתרונות למניעת התקפות מניעת שירות.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> DDOS mitigation.<br>" +
            "<strong>הסבר: </strong> יישום מערכות או שירות חיצוני לצמצום הפגיעה ומניעת התקפות מניעת שירות." +
            "</div><br/>";
    }


    //קטגורית ניהול התחברויות - דרישות


    if (classificationValue == "ג - גבוה" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי" || classificationValue == "ד - בינוני" || classificationValue == "ה - נמוך" || immunityLevelValue == "1 - קריטית" || immunityLevelValue == "2 - גבוהה מאוד" || immunityLevelValue == "3 - גבוהה") {

        if (addedCategory_Login == false) {
            protectionRequirementsText += "<div class='categoryTitle'>ניהול התחברויות </div>";
            addedCategory_Login = true;
        }

        protectionRequirementsText += 
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> שימוש במערכת הפעלה בדוקה ומאושרת בלד.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> התקנת מערכת הפעלה בדוקה ומאושרת.<br>" +
            "<strong>הסבר: </strong> בעת התחברות לרשת הארגון מחוץ למשרדים (עבודה מרחוק) תתבצע בדיקה לסוג מערכת ההפעלה שאושרה מראש." +
            "</div><br/>";
    }




    if (classificationValue == "ג - גבוה" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי" || classificationValue == "ד - בינוני" || classificationValue == "ה - נמוך" || immunityLevelValue == "1 - קריטית" || immunityLevelValue == "2 - גבוהה מאוד" || immunityLevelValue == "3 - גבוהה" || immunityLevelValue == "4 - בינונית" || immunityLevelValue == "5 - נמוכה") {


        if (addedCategory_Login == false) {
            protectionRequirementsText += "<div class='categoryTitle'>ניהול התחברויות </div>";
            addedCategory_Login = true;
        }


        protectionRequirementsText += 
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> התקנה עיתית של עדכוני אבטחה ושירות במערכת הפעלה.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> ביצוע עדכוני אבטחה עיתיים במחשב המתחבר מרחוק לרשת הארגון.<br>" +
            "<strong>הסבר: </strong> בעת התחברות לרשת הארגון מחוץ למשרדים (עבודה מרחוק) תתבצע בדיקה לעדכוני האבטחה הקיימים במחשב שאושרה מראש." +
            "</div><br/>";
    }



    //ניטור ובקרה

    if (classificationValue == "ג - גבוה" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי" || classificationValue == "ד - בינוני" || classificationValue == "ה - נמוך" || immunityLevelValue == "1 - קריטית" || immunityLevelValue == "2 - גבוהה מאוד" || immunityLevelValue == "3 - גבוהה") {


        if (addedCategory_Audit == false) {
            protectionRequirementsText += "<div class='categoryTitle'>ניטור ובקרה </div>";
            addedCategory_Audit = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> ניטור כל רכיבי אבטחת המידע ומניעת אובדן התראות על חשד לקיום אירועי אבטחה.<br>" +
            "<strong>בקרות טכנולוגיות: </strong>ביישום מערכת SIEM לניטור אבטחתי של כל אירועי אבטחת המידע.<br>" +
            "<strong>הסבר: </strong> יישום מערכת SIEM לאיסוף האירועים מכל מערכות האבטחה לרבות EOP, IPS, FW, NAC וכדומה." +
            "</div><br/>";
    }





    if (classificationValue == "ג - גבוה" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי"  || immunityLevelValue == "1 - קריטית" || immunityLevelValue == "2 - גבוהה מאוד") {


        if (addedCategory_Audit == false) {
            protectionRequirementsText += "<div class='categoryTitle'>ניטור ובקרה </div>";
            addedCategory_Audit = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> איסוף אירועי אבטחת מידע מתחנות הקצה ברשת.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> ניטור אבטחתי של תחנות קצה.<br>" +
            "<strong>הסבר: </strong> ניטור תחנות קצה ברשת ומניעת אובדן התראות על חשד לקיום אירועי אבטחה או פעילות חריגה בתחנות הקצה." +
            "</div><br/>";
    }





    if (immunityLevelValue == "1 - קריטית" || immunityLevelValue == "2 - גבוהה מאוד" || immunityLevelValue == "3 - גבוהה") {


        if (addedCategory_Audit == false) {
            protectionRequirementsText += "<div class='categoryTitle'>ניטור ובקרה </div>";
            addedCategory_Audit = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> איסוף אירועי אבטחה ממערכות האבטחה של עמדות חיצוניות המתחברות לרשת.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> יישום מערכת ניטור אבטחתי של מחשבים חיצוניים (מחשב פרטי של העובד בבית, מחשב של ספק חיצוני.<br>" +
            "<strong>הסבר: </strong> ניטור אירועי האבטחה שזוהו על ידי מערכות הבקרה והניטור של עמדות חיצוניות לרשת, המתחברות באופן קבוע לרשת הארגונית." +
            "</div><br/>";
    }



    if (classificationValue == "ג - גבוה" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי" || classificationValue == "ד - בינוני" || classificationValue == "ה - נמוך" || immunityLevelValue == "1 - קריטית" || immunityLevelValue == "2 - גבוהה מאוד") {


        if (addedCategory_Audit == false) {
            protectionRequirementsText += "<div class='categoryTitle'>ניטור ובקרה </div>";
            addedCategory_Audit = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> איסוף אירועי אבטחה ממחשבים ניידים המתחברים לרשת.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> ניטור אבטחתי של מחשבים ניידים.<br>" +
            "<strong>הסבר: </strong>ניטור מחשבים ניידים ברשת ומניעת אובדן התראות על חשד לקיום אירועי אבטחה או פעילות חריגה במחשבים אלו." +
            "</div><br/>";
    }




    if (classificationValue == "ג - גבוה" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי" || classificationValue == "ד - בינוני" || classificationValue == "ה - נמוך" || immunityLevelValue == "1 - קריטית" || immunityLevelValue == "2 - גבוהה מאוד" || immunityLevelValue == "3 - גבוהה") {


        if (addedCategory_Audit == false) {
            protectionRequirementsText += "<div class='categoryTitle'>ניטור ובקרה </div>";
            addedCategory_Audit = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> ניטור הפעולות בניהול זהויות והרשאות.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> identity management audit log. <br>" +
            "<strong>הסבר: </strong> רישום וניטור כלל הפעולות שבוצעו בניהול זהויות והרשאות, לרבות פעולת הגדרת משתמשים חדשים, מחיקתם, השעייתם, הוספה ושינוי הרשאות. רישום פעולות חריגות וכן פעולות שנחסמו. בכל פעולה ירשמו כל מאפיניה - מי, מתי, מה, היכן, מדוע." +
            "</div><br/>";
    }





    if (classificationValue == "ג - גבוה" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי") {


        if (addedCategory_Audit == false) {
            protectionRequirementsText += "<div class='categoryTitle'>ניטור ובקרה </div>";
            addedCategory_Audit = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong>.ניטור הפעולות בגישה למידע שהוגדר כרגיש<br>" +
            "<strong>בקרות טכנולוגיות: </strong>sensitive info access audit log.<br>" +
            "<strong>הסבר: </strong> רישום וניטור כלל הפעולות שבוצעו במידע רגיש, לרבות פעולות יצירת מידע, קריאה, שינוי ומחיקה, הוספה ושינוי הרשאות גישה למידע, רישום פעולות חריגות וכן פעולות שנחסמו. בכל פעולה ירשמו כל מאפיניה - מי, מתי, מה, היכן, מדוע." +
            "</div><br/>";
    }





    if (immunityLevelValue == "1 - קריטית" || immunityLevelValue == "2 - גבוהה מאוד" || immunityLevelValue == "3 - גבוהה" || immunityLevelValue == "4 - בינונית" || immunityLevelValue == "5 - נמוכה") {


        if (addedCategory_Audit == false) {
            protectionRequirementsText += "<div class='categoryTitle'>ניהול ובקרה: </div>";
            addedCategory_Audit = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> ניטור מערך הזמינות והגיבויים. <br>" +
            "<strong>בקרות טכנולוגיות: </strong> Redunadancy & Baceup Audit Log. <br>" +
            "<strong>הסבר: </strong> רישום וניטור כלל הפעולות שבוצעו במערך הזמינות והגיבויים, לרבות פעולות ניהול מערך הזמינות, הגדרת יתירות לרכיבים או שרתים, הגדרת גיבויים מסוגים שונים, ביצוע גיבויים ושיחזורים, הפעלת רכיבים או שרתים באתר ה DR. רישום פעולות חריגות וכן פעולות שנחסמו. בכל פעולה ירשמו כל מאפיניה - מי, מתי, מה, היכן, מדוע." +
            "</div><br/>";
    }




    //שרידות והתאוששות




    if (immunityLevelValue == "1 - קריטית" || immunityLevelValue == "2 - גבוהה מאוד" || immunityLevelValue == "3 - גבוהה" || immunityLevelValue == "4 - בינונית" || immunityLevelValue == "5 - נמוכה") {


        if (addedCategory_Recovery == false) {
            protectionRequirementsText += "<div class='categoryTitle'>שרידות והתאוששות </div>";
            addedCategory_Recovery = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> גיבוי מחזורי של המידע - יומי, שבועי, חודשי, שנתי.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> גיבוי מידע מחזורי.<br>" +
            "<strong>הסבר: </strong> יישום תהליך ומערכת לגיבוי מחזורי של המידע למדיה נתיקה, ענן או מערכת אחסון מרוחקת ובדיקה עתית של יכולות שחזור המידע." +
            "</div><br/>";
    }



    if (immunityLevelValue == "1 - קריטית" || immunityLevelValue == "2 - גבוהה מאוד" || immunityLevelValue == "3 - גבוהה") {


        if (addedCategory_Recovery == false) {
            protectionRequirementsText += "<div class='categoryTitle'>שרידות והתאוששות </div>";
            addedCategory_Recovery = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> יישום גיבוי ON LINE של המידע בזמן אמת.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> גיבוי חם.<br>" +
            "<strong>הסבר: </strong> יישום גיבוי אונליין של המידע בזמן אמת למערכת אחסון מקבילה ומאובטחת להבטחת זמינות ויתירות המידע. " +
            "</div><br/>";
    }



    if (immunityLevelValue == "1 - קריטית" || immunityLevelValue == "2 - גבוהה מאוד" || immunityLevelValue == "3 - גבוהה") {


        if (addedCategory_Recovery == false) {
            protectionRequirementsText += "<div class='categoryTitle'>שרידות והתאוששות </div>";
            addedCategory_Recovery = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong>יישום אתר חירום למערכות המידע המרכזיות והקריטיות.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> הקמת אתר DR.<br>" +
            "<strong>הסבר: </strong> הקמת אתר לשעת חירום והעתקת כלל המערכות המרכזיות והמידע הקריטי לאתר חירום מרוחק." +
            "</div><br/>";
    }






    if (immunityLevelValue == "1 - קריטית" || immunityLevelValue == "2 - גבוהה מאוד" || immunityLevelValue == "3 - גבוהה" || immunityLevelValue == "4 - בינונית") {


        if (addedCategory_Recovery == false) {
            protectionRequirementsText += "<div class='categoryTitle'>שרידות והתאוששות </div>";
            addedCategory_Recovery = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> כתיבת נוהל ויישום תהליכי הבטחת ההמשכיות העסקית בשעת חירום.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> נוהל BCP. <br>" +
            "<strong>הסבר: </strong> כתיבת נהלי עבודה ויישום תהליכי מעבר לאתר חירום בשעת הצורך. תוך הגדרת בעלי סמכות ואחריות לביצוע כל שלבי התרגול והמעבר לאתר וחזרה לשגרה. נדרשת קביעת תהליך בו יוחלט באילו נסיבות עוברים לפעילות מאתר חירום בכלי למנוע מעבר לא מושכל." +
            "</div><br/>";
    }

    //גריטת ציוד ומדיה
  

    if (classificationValue == "ג - גבוה" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי") {


        if (addedCategory_MediaDisposal == false) {
            protectionRequirementsText += "<div class='categoryTitle'>גריטת ציוד ומדיה </div>";
            addedCategory_MediaDisposal = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> מניעת נגישות בדרך כלשהי למידע הנמצא בדיסקים אשר סיימו את מחזור חייהם.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> גריטת דיסקים קשיחים נייחים וניידים.<br>" +
            "<strong>הסבר: </strong> השמדה פיזית של דיסקים קשיחים, כולל דיסקים נייחים ודיסקים נתיקים עם סיום השימוש בהם." +
            "</div><br/>";
    }



    if (classificationValue == "ג - גבוה" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי") {


        if (addedCategory_MediaDisposal == false) {
            protectionRequirementsText += "<div class='categoryTitle'>גריטת ציוד ומדיה </div>";
            addedCategory_MediaDisposal = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> מניעת נגישות בדרך כלשהי למידע הנמצא במדיה אופטית אשר סיימה את מחזור חייה.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> גריטת מדיה אופטית.<br>" +
            "<strong>הסבר: </strong>השמדה פיזית של מדיה אופטית CD/DVD  עם סיום השימוש בה." +
            "</div><br/>";
    }




    if (classificationValue == "ג - גבוה" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי" || classificationValue == "ד - בינוני") {


        if (addedCategory_MediaDisposal == false) {
            protectionRequirementsText += "<div class='categoryTitle'>גריטת ציוד ומדיה </div>";
            addedCategory_MediaDisposal = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> מניעת גישה כלשהי למידע בנייר.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> גריסת נייר.<br>" +
            "<strong>הסבר: </strong> גריסת נייר בתדירות גבוהה למניעת אחסון או נגישות פיזית של לא מורשים למסמכים וטפסים העלולים להכיל מידע רגיש." +
            "</div><br/>";
    }


    //העברת ציוד בין רשתות ורמות סיווג

    if (classificationValue == "ג - גבוה" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי" || classificationValue == "ד - בינוני") {


        if (addedCategory_EquipmentNetworkTransfer == false) {
            protectionRequirementsText += "<div class='categoryTitle'>העברת ציוד בין רשתות ורמות סיווג </div>";
            addedCategory_EquipmentNetworkTransfer = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> מניעת העברה מקרית של ציוד בין רשתות.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> סימון הציוד במדבקות עם שם הרשת.<br>" +
            "<strong>הסבר: </strong> הדבקה של מדבקות סימון ובהן רמת סיווג הציוד, שם הרשת לה משתייך הציוד." +
            "</div><br/>";
    }

    //אבטחת חדר שרתים


    if (classificationValue == "ג - גבוה" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי" || classificationValue == "ד - בינוני") {


        if (addedCategory_ServerRoomSecurity == false) {
            protectionRequirementsText += "<div class='categoryTitle'>אבטחת חדר שרתים </div>";
            addedCategory_ServerRoomSecurity = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> הקמת חוות שרתים במתחם אובטח וממודר.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> חוות שרתים במתחם מאובטח.<br>" +
            "<strong>הסבר: </strong> הקמת חוות שרתים וחדרי מחשב במתקן ממודר בכניסה למורשים בלבד." +
            "</div><br/>";
    }



    if (classificationValue == "ג - גבוה" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי" || classificationValue == "ד - בינוני") {


        if (addedCategory_ServerRoomSecurity == false) {
            protectionRequirementsText += "<div class='categoryTitle'>אבטחת חדר שרתים: </div>";
            addedCategory_ServerRoomSecurity = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> חוות שרתים במבנה מאובטח פיזית.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> חוות שרתים במבנה מאובטח.<br>" +
            "<strong>הסבר: </strong> הקמת חוות שרתים במבנה מאובטח פיזית על פי הכללים: ממוגן בבטון/תת קרקעי, אבטחת שומרים בכניסה, גלאי נפח ואזעקה, מעקב וידאו במעגל סגור הכולל הקלטה והתראת תנועה. רמת האבטחה הפיזית הנדרשת תותאם לרמת הסיווג של המערכות." +
            "</div><br/>";
    }



    if (classificationValue == "ג - גבוה" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי" || classificationValue == "ד - בינוני") {


        if (addedCategory_ServerRoomSecurity == false) {
            protectionRequirementsText += "<div class='categoryTitle'>אבטחת חדר שרתים </div>";
            addedCategory_ServerRoomSecurity = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> יישום אמצעי בקרת כניסה.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> בקרת כניסה לחוות השרתים.<br>" +
            "<strong>הסבר: </strong> יישום אמצעי בקרת כניסה למתקן ולחוות השרתים עצמה: כניסה למורשים בלבד בזיהוי כרטיס חכם או זיהוי ביומטרי, ניהול יומן הרשאות כניסה, ליווי אנושי למבצעי עבודות זמניות." +
            "</div><br/>";
    }




    if (immunityLevelValue == "1 - קריטית" || immunityLevelValue == "2 - גבוהה מאוד" || immunityLevelValue == "3 - גבוהה" || immunityLevelValue == "4 - בינונית") {


        if (addedCategory_ServerRoomSecurity == false) {
            protectionRequirementsText += "<div class='categoryTitle'>אבטחת חדר שרתים </div>";
            addedCategory_ServerRoomSecurity = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> מיגון חוות השרתים בפני פגעי טבע.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> מיגון בפני פגעי טבע.<br>" +
            "<strong>הסבר: </strong>מיגון חוות השרתים בפני פגעי טבע כגון UPS.  כנגד הפסקות חשמל, חיבור לתשתית גנרטור ואספקת דלק, גלאים וכיבוי אש אוטומטי, גלאים והתראת הצפת מים. היקף אמצעי המיגון וחוזקם יותאם לרמת החסינות הנדרשת בהתאמה למתאר איומי פגעי הטבע במבנה או באזור הגיאוגרפי בו ממוקת חוות השרתים" +
            "</div><br/>";
    }





    if (classificationValue == "ג - גבוה" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי" || classificationValue == "ד - בינוני") {


        if (addedCategory_ServerRoomSecurity == false) {
            protectionRequirementsText += "<div class='categoryTitle'>אבטחת חדר שרתים </div>";
            addedCategory_ServerRoomSecurity = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> נעילת שרתים בארונות מוגנים.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> ארונות שרתים מוגנים.<br>" +
            "<strong>הסבר: </strong> התקנת השרתים, ציוד תקשורת ורכיבי אבטחה בארונות ממוגנים ונעולים ופתיחתם על ידי מורשים בלבד. לשרתים ברמות סיווג א-ג נדרש ליישם גם תיעוד ממוכן של כל פתיחת ארון ותיעוד העבודות שבוצעו בארון." +
            "</div><br/>";
    }



    //דרישות הגנה פיזית למשרדים ממוחשבים
   

    if (classificationValue == "ג - גבוה" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי") {


        if (addedCategory_OfficeSecurity == false) {
            protectionRequirementsText += "<div class='categoryTitle'>דרישות הגנה פיזית למשרדים ממוחשבים </div>";
            addedCategory_OfficeSecurity = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> התקנת אמצעי בקרה לכניסה למשרדים.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> בקרת כניסה למשרדים.<br>" +
            "<strong>הסבר: </strong> יישום בקרת כניסה למשרדים באמצעות RFID. " +
            "</div><br/>";
    }





    if (classificationValue == "א - קריטי") {


        if (addedCategory_OfficeSecurity == false) {
            protectionRequirementsText += "<div class='categoryTitle'>דרישות הגנה פיזית למשרדים ממוחשבים. </div>";
            addedCategory_OfficeSecurity = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> ליווי כניסה לבלתי מורשים.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> בקרת כניסה למשרדים.<br>" +
            "<strong>הסבר: </strong> יישום בקרת כניסה למשרדים ברמת סיווג גבוהה - ליווי אנושי לבלתי מורשים, ומניעת גישה למידע." +
            "</div><br/>";
    }



    if (classificationValue == "ג - גבוה" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי") {


        if (addedCategory_OfficeSecurity == false) {
            protectionRequirementsText += "<div class='categoryTitle'>דרישות הגנה פיזית למשרדים ממוחשבים </div>";
            addedCategory_OfficeSecurity = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> יישום אמצעי בקרה בפני כניסה בלתי מורשית.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> בקרה בפני כניסה לא מורשית.<br>" +
            "<strong>הסבר: </strong> יישום אמצעי בקרה אקטיביים לזיהוי כניסה לא מורשית למשרדים בהם ציוד ממוחשב מסווג על ידי אמצעים כדוגמת - גלאי נפח, אזעקה, וידאו במעגל סגור עם זיהוי תמונה." +
            "</div><br/>";
    }






    if (immunityLevelValue == "1 - קריטית" || immunityLevelValue == "2 - גבוהה מאוד" || immunityLevelValue == "3 - גבוהה" || immunityLevelValue == "4 - בינונית") {


        if (addedCategory_OfficeSecurity == false) {
            protectionRequirementsText += "<div class='categoryTitle'>דרישות הגנה פיזית למשרדים ממוחשבים </div>";
            addedCategory_OfficeSecurity = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> מיגון משרדים בפני פגעי טבע.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> מיגון משרדים בפנני פגעי טבע.<br>" +
            "<strong>הסבר: </strong>מיגון משרדים בפני פגעי טבע כגון UPS  כנגד הפסקות חשמל, חיבור לתשתית גנרטור ואספקת דלק, גלאים וכיבוי אש אוטומטי, גלאים והתראת הצפת מים. היקף אמצעי המיגון וחוזקם יותאם לרמת החסינות הנדרשת בהתאמה למתאר איומי פגעי הטבע במבנה או באזור הגיאוגרפי בו ממוקמים המשרדים." +
            "</div><br/>";
    }


    //דרישות מול מיקור חוץ / שרשרת אספקה
    


    if (immunityLevelValue == "1 - קריטית" || immunityLevelValue == "2 - גבוהה מאוד" || immunityLevelValue == "3 - גבוהה" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי") {


        if (addedCategory_SupplyChain == false) {
            protectionRequirementsText += "<div class='categoryTitle'>דרישות מול מיקור חוץ/ שרשרת אספקה </div>";
            addedCategory_SupplyChain = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> הגדרת דרישות אבטחה אפליקטיביות.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> application cyber security standard.<br>" +
            "<strong>הסבר: </strong> הגדרת דרישות אבטחה אפליקטיביות מפורשות בהן המערכות הנרכשות תדרשנה לעמוד." +
            "</div><br/>";
    }



    if (immunityLevelValue == "1 - קריטית" || immunityLevelValue == "2 - גבוהה מאוד" || immunityLevelValue == "3 - גבוהה" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי" || classificationValue == "ג - גבוה") {


        if (addedCategory_SupplyChain == false) {
            protectionRequirementsText += "<div class='categoryTitle'>דרישות מול מיקור חוץ/ שרשרת אספקה </div>";
            addedCategory_SupplyChain = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> סביבת פיתוח וניהול פיתוח מאובטחת.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> סביבת פיתוח וניהול פיתוח מאובטחת.<br>" +
            "<strong>הסבר: </strong> הקמת סביבת פיתוח מאובטחת וממודרת המנותקת מרשתות ציבוריות." +
            "</div><br/>";
    }




    if (immunityLevelValue == "1 - קריטית" || immunityLevelValue == "2 - גבוהה מאוד" || immunityLevelValue == "3 - גבוהה" || immunityLevelValue == "4 - בינונית" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי" || classificationValue == "ג - גבוה" || classificationValue == "ד - בינוני") {


        if (addedCategory_SupplyChain == false) {
            protectionRequirementsText += "<div class='categoryTitle'>דרישות מול מיקור חוץ/ שרשרת אספקה </div>";
            addedCategory_SupplyChain = true;
        }


        protectionRequirementsText +=
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> בדיקות מסירה.<br>" +
            "<strong>בקרות טכנולוגיות: </strong> pre delivery  testing.<br>" +
            "<strong>הסבר: </strong>  בדיקות מסירה שהספק מתחייב לבצע ולמסור את המערכת עם תיעוד מלא של ביצוע בדיקות המסירה ותוצאותיהן, כאשר המערכת או התוצרים עונים באופן מלא על דרישות ותקני הסייבר שנקבעו בחוזה. אם קיימים פערים ידווח הספק על הפערים ויספק תכנית תיקון והשלמות פערים אשר תאושר על ידי המזמין." +
            "</div><br/>";
    }





    if (immunityLevelValue == "1 - קריטית" || immunityLevelValue == "2 - גבוהה מאוד" || immunityLevelValue == "3 - גבוהה" || classificationValue == "ב - גבוה מאוד" || classificationValue == "א - קריטי" || classificationValue == "ג - גבוה") { //אם אחת מאפשרויות הבחירה האלו נבחרו אז...


        if (addedCategory_SupplyChain == false) { //אם עדיין לא נוספה הקטגוריה הזו לדף
            protectionRequirementsText += "<div class='categoryTitle'>דרישות מול מיקור חוץ/ שרשרת אספקה </div>"; //להציג את הכותרת של הקטגוריה בטקסט
            addedCategory_SupplyChain = true; //להפוך את המשנה המייצג את סטאטוס הצגתה ל-כן
        }


        protectionRequirementsText += //להכניס את הטקסט הבא בתוך המשתנה שאחראי על תוכן הטקסט שיוצג ב-html
            "<div class='requirementText'>" +
            "<strong>דרישה: </strong> תחזוקה מאובטחת של המערכת. <br>" +
            "<strong>בקרות טכנולוגיות: </strong> תחזוקה מאובטחת של המערכת. <br>" +
            "<strong>הסבר: </strong> שימור סביבת פיתוח ותחזוקת מערכת מאובטחת לפי הדרישות גם לאחר מסירת המערכת וכל עוד המערכת מתוחזקת על ידי הספק." +
            "</div><br/>";
    }

    if (protectionRequirementsText != "") {
        document.getElementById("resultsContainer").style.border = "4px solid #0d47a1";
        document.getElementById("resultsContainer").style.borderRadius = "15px";

    }

    document.getElementById("sumTitle").innerHTML = "תוצאות הסקר - מערכת " + nameValue;

    document.getElementById("SecurityRequirementsText").innerHTML ="<div class='threatTextDesign'>" + resultThreatText + "</div>" +
        "<div class='regulationText' style='color: #002060;margin-top: 10px;margin-right: 10px'>* שימו לב כי יש לעמוד בתקן רגולציה מתאים לסוג המידע שנבחר.</div>" +
        protectionRequirementsText;


    document.getElementById("resultsContainer").style.display = "block"; //ווידוא תצוגת הפלט, למקרה שאופס לפני והוסתר

}

function resetForm() {
    // איפוס טופס
    document.getElementById("mainForm").reset();

    // הסתרת תיבת התוצאות
    document.getElementById("resultsContainer").style.display = "none";

    // איפוס טקסטים של תוצאות
    document.getElementById("sumTitle").innerHTML = "";
    document.getElementById("SecurityRequirementsText").innerHTML = "";
    document.getElementById("regulationNote").innerHTML = "";

    // איפוס הודעות שגיאה כלליות
    document.getElementById("generalFormError").innerText = "";

    // איפוס הודעות שגיאה בשדות ספציפיים
    var errorTexts = document.getElementsByClassName("errorText");
    for (var i = 0; i < errorTexts.length; i++) {
        errorTexts[i].innerText = "";
    }

    // איפוס משתנים גלובליים
    protectionRequirementsText = "";
    infoTypeText = "";
    totalThreatCount = 0;

    // איפוס קטגוריות שנבחרו
    addedCategory_Hizdahut = false;
    addedCategory_Harshaaot = false;
    addedCategory_Memashkim = false;
    addedCategory_Login = false;
    addedCategory_Audit = false;
    addedCategory_Recovery = false;
    addedCategory_MediaDisposal = false;
    addedCategory_EquipmentNetworkTransfer = false;
    addedCategory_ServerRoomSecurity = false;
    addedCategory_OfficeSecurity = false;
    addedCategory_SupplyChain = false;
}