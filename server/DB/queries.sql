USE sql_crm;

SELECT client.id,client.name AS client_name,email,firstContact,type,sold,owner.name AS owner_name,country.name AS country_name
from client,email_type,owner,country
WHERE client.email_type = email_type.id AND client.owner=owner.id AND client.country=country.id
ORDER BY client.id

