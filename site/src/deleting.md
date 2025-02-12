# Delete Student Entries

You may find a need for deleting several student entries in bulk, such as cleaning up accidental entries at the end of a semester.

Deleting student entries follows a similar process to finalizing them:

1. View your student entries, as described in the [View Student Entries](viewing.md) page of this guide
2. Select the "delete-entries" view by changing the "Change View" dropdown and clicking the "Change View" button 
3. Select the entries you wish to delete by checking the box next to them, then click "Delete Displayed Selected Entries"
4. A summary of what entries were deleted will be shown at the top of the page

!!! warning "Deleting Limited to 250 Entries at Once"
    In order to limit impact on database performance for all users, you may only delete up to 250 entries at a time.

!!! warning "Deleting Moves Downstream"
    When you delete an entry, all entries that refer to it to will also be deleted, and so on.

    For example, if you delete an Environmental Sample, all Isolates that refer to it will also be deleted, as well as all Streak Plates that refer to any of those Isolates.

    If an entry cannot be deleted (such as by already having been finalized), then all entries that it is downstream of cannot be deleted either.

This is the final page of the instructor guide -- congrats! Return here as often as you need for reference, check out the [Entry Types](entries/index.md) pages as needed, and we hope you have a great time! Reach out to <tinyearth@wid.wisc.edu> if you have any questions.

Thank you for contributing to science!
