MAJOR WIP 
    To Do:
        1. Get the rest of photos (for US congresspeople)
        2. Create the stacked bar charts
        3. Add the election data
        4. Write the Javascript
        5. Design CSS for Mobile
        6. Revise the overall style


Step By Step/Notes: <br> <br>
    1. Google Sheets (Sheet: Reps 2014-2022)
        a. Some off-year (non-election year) columns were left in place to show incidents where a representative resigned or otherwise ,ceased to hold office and was replaced via special election. 
<br> <br>
    2. How to Display the shift in NY-3 (Santos-to-Suozzi)
        a. They will display next to each other, side-by-side. There will be some sort of note next to Sanots stating he was expelled. Depending on the progress made, maybe we could include a little excerpt that appears "onclick" (for better mobile accessiblity), explaining why.

<br> <br>
    3. Add drop-down menu to filter reps by borough
         *NOT SURE YET IF WE WILL DO THIS YET*
      

Deisgn & Guidelines:  <br> <br>
        Users can enter their congressional district (only for NYC’s 18 congressional districts) and it will then display the election results for the top 3 performing candidates of that district for the previous 5 cycles. Initially, we had considered doing a "enter your zip code" for to get your congressional district and rep, but ran into the problem of finding data on which NYC zip codes are part of which congressional districts, as well as some zip codes potentially falling into more than one CD and the fact that there are also these types of tools are government sites already.

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


Congressional Photo Source:
    https://bioguide.congress.gov/ 