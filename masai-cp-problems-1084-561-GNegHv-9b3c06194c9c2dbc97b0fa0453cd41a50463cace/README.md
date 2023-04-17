# WEB - Masai Contact List

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Form Submit Storing Data is LS - 1 marks.
 ✅ Check the LS Data after mutiple form submits - 1 marks.
 ✅ Check the Contact List page's Table  - 3 marks.
 ✅ Check Filtering in Contact List Page  - 2 marks.
 ✅ Check the Deleting  - 1 marks.
 ✅ Visit Deleted Page and Check Table - 1mark.
```

## Installation

- you can use any node version that works for you ( 14+ )
- Download and unzip the boilerplate
- Navigate to the correct path

## Folder structure

- index.html
- contactList.html
- deleted.html
- Scripts/index.js
- Scripts/deleted.js
- Scripts/contact.js
- Please ignore all the other files except the above-mentioned ones.

### You haven't taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Description

#### Use the template provided below to write your code (Mandatory)

### Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

### Problem Statement:-

- Build an application where you can store all the contacts that you have.
- Your application had a Navbar that contains 3 tabs (this is already in the template no need to build).
  1. Home(index.html)
  2. Contact List(contactList.html)
  3. Deleted(deleted.html)

### Home Page:-

- This page contains a form with 5 input boxes and one select tag having the following fields (this is already in the template no need to build).

1. Name (Input-Type-text)
2. Description (Input-Type-text)
3. Adding Date (Input-Type-date)
4. Phone Number (Input-Type-number)
5. Email (Input-Type-email)
6. Contact Type (Select)

- On clicking on form submit (form submit event) you should store contact data in your local storage with key `contact-list`.

`Hint : localStorage.setItem("contact-list",JSON.stringify)`

- Refer to this image for better understanding:- ![form.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-12-02/Screenshot%202022-12-02%20at%2010.04.22%20AM_101521.png)
- Refer to this doc to understand how to take input values from date - [Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date)

### Contact List Page:-

- On this page all the data from the `contact-list` will be shown in a table format.
- The table will have the following columns:-

  1. Name
  2. Description
  3. Add Date
  4. Phone Number
  5. Email
  6. Contact Type
  7. Delete

- Here the values will come from the LacalStorage Except for the last column.
- On all the rows of the last column will have this value `Delete`. This word is case sensitive. Please note that.
- When You click on the last cell of that row(Add) that row should be deleted both from DOM and from localStorage and should be added in a new localStorage with the key `deleted-list`.

`Hint : localStorage.setItem("deleted-list",JSON.stringify) `.

- Refer to this image for better understanding ![contacts.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-12-02/Screenshot%202022-12-02%20at%2010.06.52%20AM_992147.png)

### Deleted Page:-

- On this page all the data from the `deleted-list` will be shown in a table format.
- The table will have the following columns:-

  1. Name
  2. Description
  3. Add Date
  4. Phone Number
  5. Email
  6. Contact Type

- Refer to this image for better understanding:- ![deleted.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-12-02/Screenshot%202022-12-02%20at%2010.07.55%20AM_413343.png)

### Bonus Features:-

- In the Contact page you will have a select field. You can filter contacts by type with that.
  ![filter.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-12-02/Screenshot%202022-12-02%20at%2010.07.22%20AM_738887.png)
- When you chose the default value in the select tag(Contact Type) all the contacts in the localstorage should be shown.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
