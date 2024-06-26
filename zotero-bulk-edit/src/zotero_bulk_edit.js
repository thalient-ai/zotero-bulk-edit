(async function() {
    const startTime = performance.now();

    // Field definitions
    const fields = [
        { "field": "abstractNote", "localized": "Abstract" },
        { "field": "accessDate", "localized": "Accessed Date" },
        { "field": "applicationNumber", "localized": "Application Number" },
        { "field": "archive", "localized": "Archive" },
        { "field": "archiveID", "localized": "Archive ID" },
        { "field": "archiveLocation", "localized": "Location in Archive" },
        { "field": "artworkMedium", "localized": "Artwork Medium" },
        { "field": "artworkSize", "localized": "Artwork Size" },
        { "field": "assignee", "localized": "Assignee" },
        { "field": "audioFileType", "localized": "Audio File Type" },
        { "field": "audioRecordingFormat", "localized": "Audio Format" },
        { "field": "billNumber", "localized": "Bill Number" },
        { "field": "blogTitle", "localized": "Blog Title" },
        { "field": "bookTitle", "localized": "Book Title" },
        { "field": "callNumber", "localized": "Call Number" },
        { "field": "caseName", "localized": "Case Name" },
        { "field": "citationKey", "localized": "Citation Key" },
        { "field": "code", "localized": "Code" },
        { "field": "codeNumber", "localized": "Code Number" },
        { "field": "codePages", "localized": "Code Pages" },
        { "field": "codeVolume", "localized": "Code Volume" },
        { "field": "committee", "localized": "Committee" },
        { "field": "company", "localized": "Company" },
        { "field": "conferenceName", "localized": "Conference Name" },
        { "field": "country", "localized": "Country" },
        { "field": "court", "localized": "Court" },
        { "field": "creatorFirstName", "localized": "First Name" },
        { "field": "creatorLastName", "localized": "Last Name" },
        { "field": "date", "localized": "Date" },
        { "field": "dateDecided", "localized": "Date Decided" },
        { "field": "dateEnacted", "localized": "Date Enacted" },
        { "field": "dictionaryTitle", "localized": "Dictionary Title" },
        { "field": "distributor", "localized": "Distributor" },
        { "field": "docketNumber", "localized": "Docket Number" },
        { "field": "documentNumber", "localized": "Document Number" },
        { "field": "DOI", "localized": "DOI" },
        { "field": "edition", "localized": "Edition" },
        { "field": "encyclopediaTitle", "localized": "Encyclopedia Title" },
        { "field": "episodeNumber", "localized": "Episode Number" },
        { "field": "extra", "localized": "Extra" },
        { "field": "filingDate", "localized": "Filing Date" },
        { "field": "firstPage", "localized": "First Page" },
        { "field": "format", "localized": "Format" },
        { "field": "forumTitle", "localized": "Forum Title" },
        { "field": "genre", "localized": "Genre" },
        { "field": "history", "localized": "History" },
        { "field": "identifier", "localized": "Identifier" },
        { "field": "institution", "localized": "Institution" },
        { "field": "interviewMedium", "localized": "Interview Medium" },
        { "field": "ISBN", "localized": "ISBN" },
        { "field": "ISSN", "localized": "ISSN" },
        { "field": "issue", "localized": "Issue" },
        { "field": "issueDate", "localized": "Issue Date" },
        { "field": "issuingAuthority", "localized": "Issuing Authority" },
        { "field": "journalAbbreviation", "localized": "Journal Abbreviation" },
        { "field": "label", "localized": "Label" },
        { "field": "language", "localized": "Language" },
        { "field": "legalStatus", "localized": "Legal Status" },
        { "field": "legislativeBody", "localized": "Legislative Body" },
        { "field": "libraryCatalog", "localized": "Library Catalog" },
        { "field": "mapType", "localized": "Map Type" },
        { "field": "manuscriptType", "localized": "Manuscript Type" },
        { "field": "meetingName", "localized": "Meeting Name" },
        { "field": "nameOfAct", "localized": "Name of Act" },
        { "field": "network", "localized": "Network" },
        { "field": "note", "localized": "Note" },
        { "field": "numPages", "localized": "Number of Pages" },
        { "field": "number", "localized": "Number" },
        { "field": "numberOfVolumes", "localized": "Number of Volumes" },
        { "field": "organization", "localized": "Organization" },
        { "field": "pages", "localized": "Pages" },
        { "field": "patentNumber", "localized": "Patent Number" },
        { "field": "place", "localized": "Place" },
        { "field": "postType", "localized": "Post Type" },
        { "field": "presentationType", "localized": "Presentation Type" },
        { "field": "priorityNumbers", "localized": "Priority Numbers" },
        { "field": "proceedingsTitle", "localized": "Proceedings Title" },
        { "field": "programmingLanguage", "localized": "Programming Language" },
        { "field": "programTitle", "localized": "Program Title" },
        { "field": "publicLawNumber", "localized": "Public Law Number" },
        { "field": "publicationTitle", "localized": "Publication Title" },
        { "field": "publisher", "localized": "Publisher" },
        { "field": "references", "localized": "References" },
        { "field": "reportNumber", "localized": "Report Number" },
        { "field": "reportType", "localized": "Report Type" },
        { "field": "reporter", "localized": "Reporter" },
        { "field": "reporterVolume", "localized": "Reporter Volume" },
        { "field": "repository", "localized": "Repository" },
        { "field": "repositoryLocation", "localized": "Repository Location" },
        { "field": "rights", "localized": "Rights" },
        { "field": "runningTime", "localized": "Running Time" },
        { "field": "scale", "localized": "Scale" },
        { "field": "section", "localized": "Section" },
        { "field": "series", "localized": "Series" },
        { "field": "seriesNumber", "localized": "Series Number" },
        { "field": "seriesText", "localized": "Series Text" },
        { "field": "seriesTitle", "localized": "Series Title" },
        { "field": "session", "localized": "Session" },
        { "field": "shortTitle", "localized": "Short Title" },
        { "field": "status", "localized": "Status" },
        { "field": "studio", "localized": "Studio" },
        { "field": "subject", "localized": "Subject" },
        { "field": "system", "localized": "System" },
        { "field": "thesisType", "localized": "Thesis Type" },
        { "field": "title", "localized": "Title" },
        { "field": "type", "localized": "Type" },
        { "field": "university", "localized": "University" },
        { "field": "url", "localized": "URL" },
        { "field": "versionNumber", "localized": "Version" },
        { "field": "videoRecordingFormat", "localized": "Video Recording Format" },
        { "field": "volume", "localized": "Volume" },
        { "field": "websiteTitle", "localized": "Website Title" },
        { "field": "websiteType", "localized": "Website Type" }
    ];

    // Sort fields alphabetically by localized name
    fields.sort((a, b) => a.localized.localeCompare(b.localized));

    // Function to escape special characters for regular expressions
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // Function to prompt user to select a field with autocomplete suggestions
    function autocompletePrompt(promptText, suggestions) {
        let input = "";
        while (true) {
            input = prompt(promptText + "\n\nCurrent input: " + input + "\n\nStart typing the name of the field you want to edit (e.g., 'title', 'publisher', 'type', 'name', etc.).");
            if (input === null) return null;

            let matches = suggestions.filter(suggestion => suggestion.localized.toLowerCase().includes(input.toLowerCase()));
            if (matches.length === 0) {
                alert("No matches found. Please try again.");
                continue;
            } else {
                let suggestionText = matches.map((match, index) => `${index + 1}. ${match.localized}`).join("\n");
                let choice = prompt(`Multiple matches found:\n\n${suggestionText}\n\nType the number to select the field:`);
                if (choice === null || choice === "") {
                    alert("Input canceled. Please start over.");
                    return null;
                }
                let selectedIndex = parseInt(choice, 10);
                if (!isNaN(selectedIndex) && selectedIndex > 0 && selectedIndex <= matches.length) {
                    return matches[selectedIndex - 1];
                } else {
                    alert("Invalid selection. Please enter a number between 1 and " + matches.length + ".");
                }
            }
        }
    }

    // Function to get items to edit based on user selection
    async function getItemsToEdit(editOption) {
        const zoteroPane = Zotero.getActiveZoteroPane();

        if (editOption === '2') {
            let collection = zoteroPane.getSelectedCollection();
            if (!collection) {
                alert("No collection selected.");
                return null;
            }
            return await collection.getChildItems();
        } else if (editOption === '3') {
            let savedSearch = zoteroPane.getSelectedSavedSearch();
            if (!savedSearch) {
                alert("No saved search selected.");
                return null;
            }

            console.log(`Saved search found: ${savedSearch.name} (ID: ${savedSearch.id})`);

            let search = new Zotero.Search();
            search.libraryID = savedSearch.libraryID;
            search.addCondition('savedSearchID', 'is', savedSearch.id);

            let itemIDs = await search.search();
            console.log(`Number of items found in saved search: ${itemIDs.length}`);
            if (itemIDs.length === 0) {
                alert("No items found in the saved search.");
                return null;
            }

            return await Zotero.Items.getAsync(itemIDs);
        } else {
            let selectedItems = zoteroPane.getSelectedItems();
            if (!selectedItems.length) {
                alert("No items selected.");
                return null;
            }
            return selectedItems;
        }
    }

    // Function to update creator names
    async function updateCreators(fieldName, itemsToEdit, searchRegex, replace) {
        let deletionConfirmed = false;
        let toBeDeletedItems = [];
        let originalCreatorsMap = new Map();

        await Zotero.DB.executeTransaction(async function() {
            for (let item of itemsToEdit) {
                let creators = item.getCreators();
                originalCreatorsMap.set(item.id, JSON.parse(JSON.stringify(creators)));
                let updated = false;
                let newCreators = [];

                for (let creator of creators) {
                    let nameToSearch = (creator.fieldMode === 1) ? creator.lastName : (fieldName === "creatorFirstName") ? creator.firstName : creator.lastName;

                    if (searchRegex.test(nameToSearch)) {
                        if (creator.fieldMode === 1 || fieldName === "creatorLastName") {
                            creator.lastName = nameToSearch.replace(searchRegex, replace);
                        } else if (fieldName === "creatorFirstName") {
                            creator.firstName = nameToSearch.replace(searchRegex, replace);
                        }

                        if (creator.fieldMode === 0 && !creator.firstName && !creator.lastName) {
                            toBeDeletedItems.push(item);
                        } else {
                            newCreators.push(creator);
                        }
                        updated = true;
                    } else {
                        newCreators.push(creator);
                    }
                }

                newCreators = newCreators.filter(creator => (creator.fieldMode === 1) || (creator.firstName || creator.lastName));

                if (updated) {
                    console.log(`Updating item ${item.id} with new creators:`, newCreators);
                    item.setCreators(newCreators);
                    await item.save();
                }
            }
        });

        if (toBeDeletedItems.length && !deletionConfirmed) {
            deletionConfirmed = confirm("Some author names (first and last names) will be blank after this update. Do you want to delete these author entries? Note: This will not delete the entire item or attached files, only the blank author names.");
            if (deletionConfirmed) {
                await Zotero.DB.executeTransaction(async function() {
                    for (let item of toBeDeletedItems) {
                        let creators = item.getCreators().filter(creator => creator.fieldMode === 1 || creator.firstName || creator.lastName);
                        item.setCreators(creators);
                        await item.save();
                    }
                });
            } else {
                await Zotero.DB.executeTransaction(async function() {
                    for (let item of toBeDeletedItems) {
                        let originalCreators = originalCreatorsMap.get(item.id);
                        item.setCreators(originalCreators);
                        await item.save();
                    }
                });
            }
        }

        alert("The names were successfully updated.");
    }

    // Function to update notes
    async function updateNotes(itemsToEdit, searchRegex, replace) {
        await Zotero.DB.executeTransaction(async function() {
            for (let item of itemsToEdit) {
                if (item.isNote()) {
                    let noteContent = item.getNote();
                    let newNoteContent = noteContent.replace(searchRegex, replace);
                    if (newNoteContent !== noteContent) {
                        await item.setNote(newNoteContent);
                        await item.save();
                    }
                }
            }
        });
        alert("Notes updated.");
    }

    // Function to update field values
    async function updateFieldValues(fieldName, selectedField, itemsToEdit, searchRegex, replace) {
        let idsCorrect = [];
        for (let item of itemsToEdit) {
            let fieldValue = item.getField(fieldName) || "";
            if (searchRegex.test(fieldValue)) {
                idsCorrect.push(item.id);
            }
        }

        if (!idsCorrect.length) {
            alert("No items found with the specified search term.");
            return;
        }

        // Preview of Edit
        if (idsCorrect.length > 0) {
            let previewItem = await Zotero.Items.getAsync(idsCorrect[0]);
            let previewOldValue = previewItem.getField(fieldName) || "";
            let previewNewValue = previewOldValue.replace(searchRegex, replace);
            let confirmed = confirm(`${idsCorrect.length} item(s) found with the specified search term in the field "${selectedField.localized}".\n\nExample of change:\nOld: ${previewOldValue}\nNew: ${previewNewValue}\n\nDo you want to apply these changes to all items?`);

            if (!confirmed) {
                alert("Update operation canceled.");
                return;
            }
        }

        // Replace values in selected items
        await Zotero.DB.executeTransaction(async function() {
            for (let id of idsCorrect) {
                let item = await Zotero.Items.getAsync(id);
                let oldValue = item.getField(fieldName) || "";
                let newValue = oldValue.replace(searchRegex, replace);
                console.log(`Updating item ${item.id} field "${fieldName}" from "${oldValue}" to "${newValue}"`);
                item.setField(fieldName, newValue);
                await item.save();
            }
        });
        alert(`${idsCorrect.length} item(s) updated successfully.\n\nThe specified search term was replaced in the "${selectedField.localized}" field.`);
    }

    function logTime(label, time) {
        try {
            console.log(`${label}: ${(time / 1000).toFixed(2)} seconds`);
        } catch (error) {
            console.error(`Failed to log time for ${label}: ${error.message}`);
        }
    }

    try {
        // Start the field selection process
        const selectedField = autocompletePrompt("Start typing the field name:", fields);
        if (!selectedField) {
            alert("Field selection canceled or invalid.");
            return;
        }
        const fieldName = selectedField.field;
        alert(`Field "${selectedField.localized}" selected.`);

        if (fieldName === "note") {
            alert("Warning: Only selected Notes can be edited. Ensure you have selected the notes you wish to edit.");
        }

        const search = prompt("Enter the characters or words to search for. Use * as a wildcard. Leave empty to search for blank fields. Use \\ to escape special characters (e.g., C++ becomes C\\+\\+).", "");
        if (search === null) {
            alert("Search operation canceled.");
            return;
        }

        const replace = prompt("Enter the replacement term:", "");
        if (replace === null) {
            alert("Replace operation canceled.");
            return;
        }

        let searchRegex;
        if (search === "") {
            searchRegex = /^$/;
        } else {
            const regexPattern = search.split("*").map(escapeRegExp).join(".*");
            searchRegex = new RegExp(regexPattern, "i");
        }

        let itemsToEdit;
        if (fieldName === "note") {
            itemsToEdit = Zotero.getActiveZoteroPane().getSelectedItems().filter(item => item.isNote());
            if (!itemsToEdit.length) {
                alert("No Notes selected.");
                return;
            }
        } else {
            const editOption = prompt("Enter '1' to edit only selected items, '2' to edit all items in the current collection, or '3' to edit all items in a saved search:");
            try {
                itemsToEdit = await getItemsToEdit(editOption);
                if (!itemsToEdit) {
                    return;
                }
            } catch (error) {
                alert(`An error occurred while retrieving items: ${error.message}`);
                return;
            }
        }

        const confirmationMessage = `You have chosen to edit ${itemsToEdit.length} records.\n\nField: ${selectedField.localized}\nSearch term: ${search}\nReplace term: ${replace}\n\nDo you want to proceed?`;
        const confirmation = confirm(confirmationMessage);
        if (!confirmation) {
            console.log("User cancelled the editing process.");
            return;
        }
        console.log(confirmationMessage);

        try {
            if (fieldName === "creatorFirstName" || fieldName === "creatorLastName") {
                await updateCreators(fieldName, itemsToEdit, searchRegex, replace);
            } else if (fieldName === "note") {
                await updateNotes(itemsToEdit, searchRegex, replace);
            } else {
                await updateFieldValues(fieldName, selectedField, itemsToEdit, searchRegex, replace);
            }
        } catch (error) {
            alert(`An error occurred during the update process: ${error.message}`);
            console.error(`Error in bulk edit script: ${error.message}`);
        }
    } catch (error) {
        console.error(`Error in bulk edit script: ${error.message}`);
        alert(`An error occurred: ${error.message}`);
    } finally {
        const endTime = performance.now();
        logTime("Total time", endTime - startTime);
    }
})();
