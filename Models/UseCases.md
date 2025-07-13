# Use Cases

Here are some of the key use-cases that need to be implemented in the new system.

1. Create new customer
   - Actor: Staff member
   - Description: The staff member adds a new customer in the customer list and adds the following data
     - Demographic details like name, phone, email etc.
   - Basic flow
   1. Staff member chooses the option to create a new customer.
   2. Staff member enters the new customer first and last name.
   3. OmSystem checks and confirms that the customer name does not already exist. 
   4. If the customer name already exists, then OmSystem prompts to confirm as there may be more than one customer with the same name. 
   5. OmSystem generates a new customer ID.
   6. Staff member enters rest of the demongraphic data and saves the data.
   7. OmSystem checks and validates the data and prompts if any required fields are missing. 
   8. OmSystem confirms the record has been saved.

2. Add a new instructor
   - Actor: Staff member
   - Description: The staff member adds a new instructor to the instruction list, and enters the following data:
     - Demographic details like name, phone, email etc.
     - The days and times when the instructor would be conducting the classes.
     - Instructor pay rate (each instructor is paid on the number of attendees in their classes)
3. Register a new class
   - Actor: Staff member
   - Description: The staff member adds a new class to the schedule with the following data:
     - Day, time
     - Class type
     - Instructor
4. Record a sale
   - Actor: Staff member
   - Description: The staff member records a sale of a package to an existing customer and enters the following data:
     - Type of package
     - Amount paid
     - Mode of payment
     - Date and time of payment
     - Validity start and end date
   - When a customer buys a package, their number of classes available to attend is increased based on the package bought.
5. Check-in a customer
   - An existing customer with available balance of classes in their account that are within the valid-date can check-in for a class.
   - Each check-in reduces the number of available classes in their account.
6. Gernrate reports
   - Check student balance of classes
   - Create class-attendance report
   - Create Teacher-class-attendance report
   - Create Customer attendance report
   - Create Teacher Payment calculation for each month based on the attendance

## Entities

1. Customer
2. Instructor
3. Class
4. Package
5. Attendance
6. Staff

## Relationships

1. Customer buys a Package
2. Instructor
