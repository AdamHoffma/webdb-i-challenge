# Database Queries

## Find all customers with postal code 1010

select postalcode  from customers where postalcode = 1010

## Find the phone number for the supplier with the id 11

select phone from suppliers where supplierid = 11

## List first 10 orders ever places, descending by the order date

SELECT * FROM [Orders] order by orderdate desc limit 10;

## Find all customers that live in London, Madrid, or Brazil

select City from customers where City = 'Madrid' or City = 'London' or City = 'São Paulo'

## Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"

INSERT INTO Customers (ContactName, Address, City, PostalCode, Country) VALUES ('Bilbo Baggins', '1 Hobbit-Hole', 'Bag End', '111', 'Middle Earth')

## Update Bilbo Baggins record so that the postal code changes to "11122"

Update customer set PostalCode = 11122 Where contactname = 'Bilbo Baggins'

## (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted

## (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
