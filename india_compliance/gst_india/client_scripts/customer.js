{% include "india_compliance/gst_india/client_scripts/party.js" %}

const DOCTYPE = "Customer";

validate_pan(DOCTYPE);
validate_gstin(DOCTYPE);
update_gstin_in_other_documents(DOCTYPE);
alert_for_disabled_overseas_settings(DOCTYPE);
