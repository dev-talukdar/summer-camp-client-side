const requirement = () => {
    return (
        <div> 
            <h4>
                3. Your website should have a navbar with the Website logo or Website name, Home, Instructors, Classes, Dashboard and User profile picture. The user profile picture and
                Dashboard on the navbar are conditional. If the user is signed in, the navbar will show the profile picture; otherwise, it will show the Login button.

            </h4>
             
             
                1. --- done
                2. --- done
                4. --- done
                5. --- done
             <h4>
                6.  
                (optional) Number of Classes taken by the Instructor.
                (optional) Name of the Classes taken by the Instructor.
                (optional) See Classes button to show classes by this Instructor. This will take you to a new link

            </h4>
            <h4>
                7. Classes page: Show all approved classes on this page. Each Class will have the following: 
                Select Button. If the user is not logged in, then tell the user to log in before selecting the course. This button will be disabled if:
                Available seats are 0
                Logged in as admin/instructor
                The class card background will be red if the available seats are 0.
            </h4>
            <h4>
                8. Student Dashboard:
                It will be private & only a student can access this route.
                My Selected Classes: The student will see all the Classes they booked after clicking the Select button. You must display the relevant information on the Class, Delete,
                and Pay buttons. More in point 9. On clicking the Delete button, a student can remove a selected Class from the list.
                My Enrolled Classes: Show all the Classes a student selected after successful payment.

            </h4>
            <h4>
                9. Payment: (Student Dashboard)

                Pay button Action: Upon clicking the Pay button for a Class on the My Selected Classes, the student will be redirected to the payment page to finalize their payment.
                After a successful payment, the Available seats for the particular Class will be reduced by 1. The Class information will be shown on the My Enrolled Classes page and
                removed from the My Selected Classes page.

                Create a payment history page for students. It will show the payment made by that student. Make sure to sort the payment history descending. The newest payment will be at
                the top


            </h4>
            <h4>
                10. Instructor Dashboard: 

                Add a Class: This page will have a form with the following fields:

                Class name
                Class Image
                Instructor name (read-only) (use the displayName value of logged in user/instructor)
                Instructor email (read-only) (use the email value of logged in user/instructor)
                Available seats
                Price
                Add button
                When creating a class on the database, the value of the status field will be pending.
                My Classes: Show all the Classes an instructor has added after clicking the Add button from the Add a Class page. Each Class will show relevant information, including
                pending/ approved/ denied status, Total Enrolled Students, Feedback & Update button.

                Total Enrolled Students: Initially it will be zero. If any student has successfully booked the Class, show the total number of students.

                Feedback:

                There will be no feedback if the Class is in pending or approved status.
                If the Class is in the denied state by the admin, at that time, an admin can write feedback explaining why the Class was denied, which will appear in the feedback column.

            </h4>
            <h4>
                11. Admin Dashboard:
                It will be private & only an admin can access this route.

                Manage Classes: This page will show all the Classes. All the classes added by the Instructor from the Add Class page will be displayed here. Show the following information:
                Class Image, Class name, Instructor name, Instructor email, Available seats, Price, Status(pending/approved/denied) 3 buttons( Approve, Deny and send feedback).

                Note: By default, the status will be pending. When an admin clicks the Approve button, the status will be updated to approved. The Deny and the Approve button will become
                disabled.

                Note: If the admin clicks the Deny button, the status will be updated to denied. The Deny and the Approve button will become disabled.

                Note: A modal will be opened When the admin clicks the send feedback button. Admin will write the approved/denied reason in a text field and send it to the Instructor. You
                can also do this in another route except for the modal.


                Manage Users: The admin can see the relevant information of all registered users. By default, everyone will be a student. And there will be 2 buttons: Make Instructor
                button and Make Admin button. If a user clicks any of the buttons, disable it.

                Make Instructor button Action: Update the user role as an instructor.

                Note: If the admin makes a user instructor, that user profile page will have the Instructor as the role

                Make Admin button Action: Update the user role as an admin.

            </h4>
            <h4>
                12.
                Use relevant icons in your dashboard menus, animations on your website.. You have to use anyone of the animation libraries below:

                Framer-motion
                React-awesome-reveal
                React-spring
                React-anime
            </h4>
            <div>
                <h2>BOUNS TASK: </h2>
                <h4>
                    1. Minimum 20 meaningful git commits on the client-side repository and 12 meaningful commits on the server-side repository.
                    Feel free to commit as many as needed to save your progress during load-shedding.
                </h4>
                <h4>
                    2. Create a readme for the client-side and write about your project.

                    Website name or logo or both
                    Minimum 5 points of your website features
                    Used packages/ technology name
                    Live site link
                </h4>
                <h4>
                    3. Implementing a dark/light theme toggle for the home page. Its optional to implement the theme toggle for the entire website.
                </h4>
                
                 
                 
                <h4>
                   7. Must Use react-hook-form in the registration & login page. Using react hook form in another place is optional.
                </h4>
                
                <h4>
                    9. Implement JWT token for Login and Registration systems (Email/ password & social login). You will send the token for the Dashboard routes and verify the user.
                </h4>
                 
            </div> 
        </div>
    );
};
export default requirement;