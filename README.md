MAJOR WIP 
    To Do:
        1. Get the rest of photos (for US congress people)
        2. Create the stacked bar charts
        4. Write more Javascript
        5. Consider design options for Mobile
        6. Revise the overall style

Design Considerations:
    Color Scheme:
        -Cornflake Blue + Orange Red
        -Red/Dark Red + Blue/Dark Blue
        -In instances where using the blue and red color scheme for democrats and repblicans may insuinate some sort of hidden message, use different shades. (Orange Red + Cornflake Blue). For example, with the "Do you know your CD button, I chose not to use blue and red and instead chose cornflake blue and orangered. Regardless of what color I put on which button, I was afraid of criticism of "you think X party is more likely to know their CD than Y party, etc." To avoid that, we will use variations of blue and orange. The shades are similar enough to maintain a fairly consistent color scheme throughout the design of the webpage. Likewise, for the photo credits, I chose to used the cornflake blue and orange red to not make it look like the individual whose photo we are using sawys one-way (politically), or the other.

Javascript:
    Landing Page
        -For better flow, we added a "loading district information" pop up so the user can see one last bit of our design before they leave this page. 
        -I added a section where if the user inputs a NaN value into the "Enter your CD" popup, it will ask them to enter a number. (If this project ever expanded past NYC/NY-Districts, this would need to be reconsidered). If they enter a district that we do not intend to provide the results for, it will prompt them to enter a valid NYC district. That will be determined by setting pre-determined districts into variables in js. If the value entered does not match one of our variables, they will be prompted to re-enter the district. If they enter a valid district, it will take the to our election results page, but specifically land them on the district they entered. 

    Switching from Landing Page to District Pagee
        -Once the user enters the district they want to view, it will load them onto a new page that will display the historical results for that district for the 5 previous election cycles (maybe something about the upcoming 2024 race?)
        -I am not sure how this will be done yet, in terms of only displaying some results. (Will probably have to display information based on filters with JS?)
        -Possibly a button to switch from historical results to the most recent results.

Election Results Data Step By Step/Notes: 
    1. Google Sheets (Sheet: Reps 2014-2022)
        a. Some off-year (non-election year) columns were left in place to show incidents where a representative resigned or otherwise ,ceased to hold office and was replaced via special election. 

    2. How to Display the shift in NY-3 (Santos-to-Suozzi)
        a. They will display next to each other, side-by-side. There will be some sort of note next to Sanots stating he was expelled. Depending on the progress made, maybe we could include a little excerpt that appears "onclick" (for better mobile accessiblity), explaining why.


    3. Add drop-down menu to filter reps by borough
         *NOT SURE YET IF WE WILL DO THIS YET*
      
Deisgn & Guidelines: 
        Users can enter their congressional district (only for NYC’s 13 congressional districts) and it will then display the election results for the top 3 performing candidates of that district for the previous 5 cycles. Initially, we had considered doing a "enter your zip code" for to get your congressional district and rep, but ran into the problem of finding data on which NYC zip codes are part of which congressional districts, as well as some zip codes potentially falling into more than one CD and the fact that there are also these types of tools are government sites already.

        We would like to include a section that says don't know your district? Enter your info below! Below that text, will be an embed to the NYC Find my poll site/election district website. We have already tested embedding this on an empty html document using iframe src and have it working. 

        Once users input their CD, it could show cards similar to a dashboard complete with pictures of the elected officials. We would also create a bar chart to display the election results neatly, using colors representing the political party and gray for independents. We would get the data for the electoral history through the NYC board of elections website. 

        Styling/Design:
        It could start off with: NYC Has X amount of congressional seats. Who’s your representative? How has your district voted previously?

        After Scrolling Down:
        Left side will display an interactive to enter their district,
        The right side will display an embed of the NYC district lookup website, featuring text above the embed that says: know your district? Close this webpage” then a button somewhere on or near the embed that allows the user to close it, which then expands width, height and position of the element from the left side. 

        After Scrolling Down:
        Once the user inputs their district, it will hide the page they’re on and display pictures within cards of the current representative for that district. If a user clicks on the picture for that representative, it will show a new page with the election results for the previous 5 cycles in that district showing only the results of the top 3 performing candidates for that race. That would be displayed alongside a bar chart showing the election results. Continuing to scroll down would show the results for the previous years results, dating back no further than 5 election cycles past the most recent one.  
        Interactivity for Experience:
        At any point, a user would have the choice of clicking a button, placed somewhere on the footer that returns them to the “enter your district” element, in case they want to look up another district.


US CAPITOL - Photo Credits Information: 
    Link:https://www.flickr.com/photos/alchemist_x/32210923208/in/photolist-R5npfY-GDHW1y-ahxaTD-4EjNgb-29oueVz-2o2Wg7q-fNoLVb-2nhHit6-2ohhZpU-8KbcoC-8KbbVC-96UBpv-8qpnFs-8JBQMt-2ohn1ud-2o2cHkk-2kq1ikh-2oiHijG-spBcE3-5oUxrw-YTzBhL-e2YEEh-NZZjP5-2ohoaro-J82HRK-2i3LNm4-8JEStJ-SQm6z3-2o1UksF-qAWSr4-2kJ7umq-2mJE7C3-EMpsNp-2ocWMSW-2mKGW2K-2odC7Ub-2nWfJ6d-2o2XwUN-GbbrVH-2oGoDY6-2mKLYws-2kyo6X5-2oeyZcT-2mQbPf6-7efffX-YVMCYL-2od5hDW-2oh2yv7-g1dizS-2i7s4S3


Congressional Photo's Source:
    https://bioguide.congress.gov/ 


    Links from Stackoverflow:
    Custom Alertbox
    https://stackoverflow.com/questions/7853130/how-to-change-the-style-of-alert-box