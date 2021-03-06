import React, { useRef, createContext } from 'react'
import useCurrentSheet from './states/useCurrentSheet'
import useSelectedEntry from './states/useSelectedEntry'
import useNewEntry from './states/useNewEntry'
import useSheetPageView from './states/useSheetPageView'
import useSheetLoading from './states/useSheetLoading'
import useEntryMenu from './states/useEntryMenu'
import useSortById from './states/useSortById'
import useSortByOrder from './states/useSortByOrder'
import useSearchString from './states/useSearchString'
import useSearchField from './states/useSearchField'
import useArchiveFilter from './states/useArchiveFilter'
import useCheckboxFilter from './states/useCheckboxFilter'
import usePaginatedEntries from './states/usePaginatedEntries'
import useCurrentPage from './states/useCurrentPage'
import useDisplayEntries from './states/useDisplayEntries'
import useMasterRefresh from './states/useMasterRefresh'

const SheetContext = createContext()

const SheetProvider = ({ children }) => {
  const { currentSheet, setCurrentSheet } = useCurrentSheet();
  const { selectedEntry, setSelectedEntry } = useSelectedEntry();
  const { newEntry, setNewEntry } = useNewEntry();
  const { sheetPageView, setSheetPageView } = useSheetPageView();
  const { sheetLoading, setSheetLoading } = useSheetLoading();
  const { entryMenu, setEntryMenu } = useEntryMenu();
  const { sortById, setSortById } = useSortById();
  const { sortByOrder, setSortByOrder } = useSortByOrder();
  const { searchString, setSearchString } = useSearchString();
  const { searchField, setSearchField } = useSearchField();
  const { archiveFilter, setArchiveFilter } = useArchiveFilter();
  const { checkboxFilter, setCheckboxFilter } = useCheckboxFilter();
  const { paginatedEntries, setPaginatedEntries } = usePaginatedEntries();
  const { currentPage, setCurrentPage } = useCurrentPage();
  const { displayEntries, setDisplayEntries } = useDisplayEntries();
  const { masterRefresh, triggerRefresh } = useMasterRefresh();

  const sheetScroll = useRef(0);
  const prevPath = useRef('');

  const sheet = {

    /* STATES */
    currentSheet,
    selectedEntry,
    newEntry,
    sheetPageView,
    sheetLoading,
    entryMenu,
    sortById,
    sortByOrder,
    searchString,
    searchField,
    archiveFilter,
    checkboxFilter,
    paginatedEntries,
    currentPage,
    displayEntries,
    masterRefresh,

    /* SETTERS */
    setCurrentSheet,
    setSelectedEntry,
    setNewEntry,
    setSheetPageView,
    setSheetLoading,
    setEntryMenu,
    setSortById,
    setSortByOrder,
    setSearchString,
    setSearchField,
    setArchiveFilter,
    setCheckboxFilter,
    setPaginatedEntries,
    setCurrentPage,
    setDisplayEntries,

    /* EFFECTS */
    triggerRefresh,

    /* REFS */
    sheetScroll,
    prevPath,
  }

  return (
    <SheetContext.Provider value={{ sheet }}>
      { children }
    </SheetContext.Provider>
  )
}

export { SheetContext, SheetProvider };