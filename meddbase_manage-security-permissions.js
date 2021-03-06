// grants all un-granted permissions for the selecter member
function grantAll()
{
    var permGrant = document.querySelectorAll("input[id*='CertProperty.Grant']");
    var processedCounter = 0;

    permGrant.forEach(function (permission)
    {
        if (permission.checked == false)
        {
            processedCounter++;
            permission.click();
        }
    });

    console.log(processedCounter + " permission out of " + permGrant.length + " have been granted");
}

// un-grants all granted permissions for the selected member
function ungrantAll()
{
    var permGrant = document.querySelectorAll("input[id*='CertProperty.Grant']");
    var processedCounter = 0;

    permGrant.forEach(function (permission)
    {
        if (permission.checked == true)
        {
            processedCounter++;
            permission.click();
        }
    });

    console.log(processedCounter + " permission out of " + permGrant.length + " have been un-granted");
}

// denies all un-denied permissions for the selected member
function denyAll()
{
    var permDeny = document.querySelectorAll("input[id*='CertProperty.Deny']");
    var processedCounter = 0;

    permDeny.forEach(function (permission)
    {
        if (permission.checked == false)
        {
            processedCounter++;
            permission.click();
        }
    });

    console.log(processedCounter + " permission out of " + permDeny.length + " have been denied");
}

// un-denies all denied permissions for the selected member
function undenyAll()
{
    var permDeny = document.querySelectorAll("input[id*='CertProperty.Deny']");
    var processedCounter = 0;

    permDeny.forEach(function (permission)
    {
        if (permission.checked == true)
        {
            processedCounter++;
            permission.click();
        }
    });

    console.log(processedCounter + " permission out of " + permDeny.length + " have been un-denied");
}

// to be used on https://*.meddbase.com/nmp.aspx?cp=Certificate/DefaultBrowser
// author: Xen0byte, The Opcodemancer
