### Use case 1. Add an instructor
- Actor: Manager
- Description: The staff member adds a new instructor in the customer list and adds the following data
   - First name, last name 
   - Address
   - Phone 
   - Email 
   - Preferred mode of communication (phone or email)
- Basic flow 
   1. The manager selects the option to create a new instructor and enters their first and last name. 
   2. YogiTrack checks and confirms that the instructor name does not already exist. 
      - If the instructor name already exists, then YogiTrack prompts to confirm as there may be more than one instructor with the same name. 
   3. YogiTrack generates a new instructor ID. 
   4. The manager enters rest of the demographic data and saves the data. 
   5. YogiTrack checks and validates the data and prompts if any required fields are missing. 
   6. YogiTrack confirms the record has been saved. 
   7. YogiTrack sends a confirmation message to the instructor on the preferred mode of communication.The message is:
      -  `Welcome 'firstname' to Yoga'Hom! ... Your instructor id is I00123.`

_Note: The first letter in instructor id should be I to differentiate from a customer ID which will have C as its first letter._ 

### Use case 2. Add a class
- Actor: Manager
- Description: The staff member adds a new class to the schedule with the following data: 
   - Instructor Id 
   - Day, time 
   - Class type 
   - Pay rate
- Basic flow 
   1. The manager chooses the option to create a new class and enters the data listed above. 
   2. YogiTrack checks if there is a conflict in the schedule as only one class can be held at any time. 
      - If there is a conflict then YogiTrack suggests other options in the calendar. 
   3. The manager selects one of the options. 
   4. The manager confirms and publishes the schedule. 
   5. YogiTrack sends a confirmation message to the  manager and to the instructor that a new class has been successfully scheduled.
   6. The use case ends successfully. 


### Use case 3. Add a package
- Actor: Manager
- Description: The manager adds a new package in the list of packages. Packages have the following attributes:
   - Package name
   - Package category: General or Senior
   - Number of classes: 1, 4, 10, or unlimited
   - Start date
   - End date
   - Price
- Basic flow
   1. The manager chooses the option to add a new package and enters the data listed above
   2. YogiTrack generates a new package Id and displays a confirmation prompt that the package has been added.
   3. The use-case ends successfully.

### Use case 4. Add a Customer
   
- Actor: Manager
- Description: The manager adds a new customer with the following data
   - First name, last name
   - Address
   - Phone 
   - Email
   - Preferred mode of communication (phone or email)
   - Class balance (initial value 0)
- Basic flow
   1. The manager chooses the option to create a new customer and enters the new customer's first and last name.
   2. YogiTrack checks and confirms that the customer name does not already exist.
   3. If the customer name already exists, then YogiTrack prompts to confirm as there may be more than one customer with the same name.
   4. YogiTrack generates a new customer ID.
   5. The manager enters rest of the data listed above and saves the data.
   6. YogiTrack checks and validates the data and prompts if any required fields are missing.
   7. YogiTrack confirms the record has been saved.
   8. YogiTrack sends a confirmation message to the customer on their preferred mode of communication. The message is: 
      - `Welcome 'firstname' to Yoga'Hom! ... Your customer id is C00123.`

_Note: The first letter in customer id should be C to differentiate from an instructor ID which will have I as its first letter._ 

### Use case 5. Record a Sale
- Actor: Manager
- Description: The staff member records a sale of a package to an existing customer and enters the following data:
   - Type of package
   - Amount paid
   - Mode of payment
   - Date and time of payment
   - Validity start and end date
- Basic flow
   1. The manager chooses the option to record a new sale. 
   2. YogiTrack prompts with options to enter the data listed above.
   3. The manager enters the data. 
   4. YogiTrack validates the data entered.
   5. Amount paid is as per the package rate. 
   6. Date and time are current. 
   7. Start and end dates are as per the package rules and are current. 
   8. YogiTrack updates the class-balance for the customer based on the package bought. 
   9. YogiTrack displays the new class-balance and confirms that the sale has been recorded.
   10. The use case ends successfully.


### Use case 5. Record class attendance
- Actor: Instructor
- Description: The instructor marks the customers attending the class as present. This updates the class balance for the customers depending on the package they have bought.
- Basic flow 
   1. The instructor chooses the option to enter class attendance.
   2. YogiTrack displays the list of classes that are assigned / led by the instructor to choose from. 
   3. The instructor chooses the class for which to record attendance. 
   4. YogiTrack displays the attendance form with current date and time, with an option to change it as needed. 
   5. YogiTrack also displays a warning if the date and time do not match with the class schedule. For example, if the class schedule was Mon 9am but the attendance sheet has Tue 9am, then a warning will be indicated to indicate the discrepancy. 
   6. The instructor chooses the names of customers from the list of customers and adds them to the class.  
   7. Once al the names have been added, the instructor chooses the option to save the attendance. 
   8. YogiTrack validates the data against each customers' class balance and indicates if a customer does not have the required balance. In this case, YogiTrack gives the option to continue save the customer record with a negative balance to be resolved later. 
   9. If all data is valid, YogiTracks provides the option to save the attendance data. 
   10. YogiTrack updates class balance for all customers and sends check-in conformation with updated balance to all customers attending the class. The message looks like as shown below:  
      - `Hello 'firstName'! You checked-in for a class on dd/mm/yy at hh:mm am/pm. Your new class-balance is XXX.`
   11. The use case ends successfully. 


### Use case 6: Generate Studio Reports
- Package sales report 
- Instructors list with their list of classes and their number of check-ins 
- Customer list with their list of packages (active, future, or expired) 
- Teacher Payment report for each month based on the pay-rate and class check-ins


