# Use Cases

1. Add a new instructor
   - Actor: Staff member
   - Description: The staff member adds a new instructor in the customer list and adds the following data
     - First name, last name
     - Address
     - Phone
     - Email
     - Preferred mode of communication (phone or email)
   - Basic flow
   1. Staff member chooses the option to create a new instrcutor.
   2. Staff member enters the new instructor's first and last name.
   3. YogiTrack checks and confirms that the instructor name does not already exist. 
   4. If the instructor name already exists, then YogiTrack prompts to confirm as there may be more than one instructor with the same name. 
   5. YogiTrack generates a new instructor ID.
   6. Staff member enters rest of the demographic data and saves the data.
   7. YogiTrack checks and validates the data and prompts if any required fields are missing. 
   8. YogiTrack confirms the record has been saved.
   9. YogiTrack sends a confirmation message to the instructor on the preferred mode of communication.The message is:
      
      _Welcome to YogaNest! ... Your instructor id is I00123._ (I for YogaNest Instructor)

2. Add a new class
   - Actor: Staff member
   - Description: The staff member adds a new class to the schedule with the following data:
     - Instructor
     - Day, time
     - Class type
     - Pay rate 
   - Basic flow
   1. Staff member chooses the option to create a new class.
   2. Staff member enters the data listed above. 
   3. YogiTrack checks if there is a conflict in the schedule as only one class can be held at on time. 
   4. If there is a conflict then YogiTrack suggests other options in the calendar.
   5. Staff member confirms the schedule. 
   6. YogiTrack sends a confirmation message to the Staff member and to the instructor that a new class has been successfully scheduled. 


3. Add a new package
   - Actor: Staff member
   - Description: The staff member adds a new package in the list of packages. Packages have the following attributes:
      * Package name
      * Package category: General or Senior
      * Number of classes: 1, 4, 10, or unlimited
      * Start date 
      * End date 
      * Price
   - Basic flow
      1. Staff member chooses the option to add a new package
      2. Staff member enters the data listed above
      3. YogiTrack displays a confirmation promot that the package has been added.

4. Add a new customer
   - Actor: Staff member
   - Description: The staff member adds a new customer in the customer list and adds the following data
     - First name, last name
     - Address
     - Phone
     - Email
     - Preferred mode of communication (phone or email)
     - Class balance (initial value 0)
   - Basic flow
   1. Staff member chooses the option to create a new customer.
   2. Staff member enters the new customer first and last name.
   3. YogiTrack checks and confirms that the customer name does not already exist. 
   4. If the customer name already exists, then YogiTrack prompts to confirm as there may be more than one customer with the same name. 
   5. YogiTrack generates a new customer ID.
   6. Staff member enters rest of the demographic data and saves the data.
   7. YogiTrack checks and validates the data and prompts if any required fields are missing. 
   8. YogiTrack confirms the record has been saved.
   9. YogiTrack sends a confirmation message to the customer on the preferred mode of communication.The message is:
      
      _Welcome to YogaNest! ... Your customer id is Y00123._ (Y for YogaNest customer )


5. Record a sale
   - Actor: Staff member
   - Description: The staff member records a sale of a package to an existing customer and enters the following data:
     - Type of package
     - Amount paid
     - Mode of payment
     - Date and time of payment
     - Validity start and end date
   
   - Basic flow
   1. Staff memner chooses the option to record a new sale.
   2. YogiTrack prompts with options to enter the data listed above.
   3. YogiTrack validates the data entered. 
   4. YogiTrack updates the class-balance for the customer based on the package bought.
   5. YogiTrack displays the new class-balance and confirms that the sale has been recorded. 


6. Check-in a customer
   - Actor: Staff member 
   - Description: The staff member checks in a customer when they come to attend a class. the following data is entered:
      * Customer id
      * Class id
      * Date and time
   - Basic flow
      * The staff member chooses the option to check-in a customer.
      * The staff member enters the customer ID. 
      * YogiTrack displays the current class-balance in the customer's account.
      * If there is no balance then YogiTrack prompts to have the customer buy a new package first and then prompts to exit. 
      * If there is sufficient balance then YogiTrack prompts to enter the data above.
      * Staff member enters the data.
      * Yogitrack updates the customer's class-balance and displays the remaining balance. 
      * YogiTrack sends a message to customer on their preferred mode of communication with the check-in conformation and the remaining balance in their account. 

      _Hello 'firstName'! You are checked-in for a class on dd/mm/yy at hh:mm am/pm. Your class-balance is XXX._


6. Generate reports
   - Package sales report
   - Instructors list with their list of classes and their number of check-ins
   - Customer list with their list of packages (active, future, or expired) 
   - Teacher Payment report for each month based on the pay-rate and class check-ins
