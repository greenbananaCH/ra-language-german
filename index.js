module.exports = {
  ra: {
    action: {
      add_filter: "Filter hinzufügen",
      add: "Neu",
      back: "Zurück",
      bulk_actions: "Ein Element ausgewählt |||| %{smart_count} Elemente ausgewählt",
      cancel: "Abbrechen",
      clear_array_input: "Liste leeren",
      clear_input_value: "Eingabe löschen",
      clone: "Klonen",
      confirm: "Bestätigen",
      create: "Erstellen",
      create_item: "Erstelle %{item}",
      delete: "Löschen",
      edit: "Bearbeiten",
      export: "Exportieren",
      list: "Liste",
      refresh: "Aktualisieren",
      remove_filter: "Filter entfernen",
      remove_all_filters: "Alle Filter entfernen",
      remove: "Entfernen",
      reset: 'Reset',
      save: "Speichern",
      search: "Suchen",
      search_columns: 'Suchspalten',
      select_all: "Alles auswählen",
      select_all_button: 'Alle auswählen',
      select_row: "Diese Zeile auswählen",
      show: "Anzeigen",
      sort: "Sortieren",
      undo: "Zurücksetzen",
      unselect: "Abwählen",
      expand: "Erweitern",
      close: "Schließen",
      open_menu: "Menü öffnen",
      close_menu: "Menü schließen",
      update: "Aktualisieren",
      move_up: "Nach oben verschieben",
      move_down: "Nach unten verschieben",
      open: "Öffnen",
      toggle_theme: "Design umschalten",
      select_columns: "Spalten",
      update_application: 'Anwendung neu laden',
    },
    boolean: {
      true: "Ja",
      false: "Nein",
      null: " ",
    },
    page: {
      create: "%{name} erstellen",
      dashboard: "Dashboard",
      edit: "%{name} #%{id}",
      error: "Etwas ist schiefgelaufen",
      list: "%{name}",
      loading: "Die Seite wird geladen.",
      not_found: "Nicht gefunden",
      show: "%{name} #%{id}",
      empty: "Noch kein(e) %{name}.",
      invite: "Neu erstellen?",
      access_denied: 'Zugriff verweigert',
      authentication_error: 'Authentifizierungsfehler',
    },
    input: {
      file: {
        upload_several:
          "Zum Hochladen Dateien hineinziehen oder hier klicken, um Dateien auszuwählen.",
        upload_single:
          "Zum Hochladen Datei hineinziehen oder hier klicken, um eine Datei auszuwählen.",
      },
      image: {
        upload_several:
          "Zum Hochladen Bilder hineinziehen oder hier klicken, um Bilder auszuwählen.",
        upload_single:
          "Zum Hochladen Bild hineinziehen oder hier klicken, um ein Bild auszuwählen.",
      },
      references: {
        all_missing: "Die zugehörigen Referenzen konnten nicht gefunden werden.",
        many_missing:
          "Mindestens eine der zugehörigen Referenzen scheint nicht mehr verfügbar zu sein.",
        single_missing:
          "Eine zugehörige Referenz scheint nicht mehr verfügbar zu sein.",
      },
      password: {
        toggle_visible: "Passwort ausblenden",
        toggle_hidden: "Passwort einblenden",
      },
    },
    message: {
      about: "Über",
      access_denied:
        "Sie haben keine Berechtigung, auf diese Seite zuzugreifen.",
      are_you_sure: "Sind Sie sicher?",
      authentication_error:
        'Der Authentifizierungsserver hat einen Fehler zurückgegeben und Ihre Anmeldedaten konnten nicht überprüft werden.',
      bulk_delete_content:
        'Möchten Sie "%{name}" wirklich löschen? |||| Möchten Sie diese %{smart_count} Elemente wirklich löschen?',
      bulk_delete_title:
        "Lösche %{name} |||| Lösche %{smart_count} %{name} Elemente",
      delete_content: "Möchten Sie diesen Inhalt wirklich löschen?",
      delete_title: "Lösche %{name} #%{id}",
      details: "Details",
      error:
        "Ein Fehler ist aufgetreten und Ihre Anfrage konnte nicht abgeschlossen werden.",
      invalid_form:
        "Das Formular ist ungültig. Bitte überprüfen Sie Ihre Eingaben.",
      loading: "Die Seite wird geladen, bitte haben Sie etwas Geduld.",
      no: "Nein",
      not_found: "Die Seite konnte nicht gefunden werden.",
      yes: "Ja",
      unsaved_changes: "Einige Änderungen wurden nicht gespeichert. Sind Sie sicher, dass Sie diese Seite verlassen möchten?",
      auth_error: "Es ist ein Fehler beim Überprüfen des Authentifizierungstokens aufgetreten.",
      bulk_update_content:
        "Möchten Sie dieses(e) %{name} wirklich aktualisieren?",
      bulk_update_title:
        "Aktualisiere %{name} |||| Aktualisiere %{smart_count} %{name}",
      clear_array_input: "Möchten Sie die gesamte Liste wirklich löschen?",
      select_all_limit_reached:
        'Es gibt zu viele Elemente, um sie alle auszuwählen. Nur die ersten %{max} Elemente wurden ausgewählt.',
      placeholder_data_warning: 'Netzwerkproblem: Datenaktualisierung fehlgeschlagen.',
    },
    navigation: {
      clear_filters: 'Filter löschen',
      no_results: "Keine Ergebnisse gefunden",
      no_more_results: "Die Seite %{page} enthält keine Inhalte.",
      page_out_of_boundaries:
        "Die Seite %{page} liegt außerhalb des gültigen Bereichs",
      page_out_from_end: "Letzte Seite",
      page_out_from_begin: "Erste Seite",
      page_range_info: "%{offsetBegin}-%{offsetEnd} von %{total}",
      page_rows_per_page: "Zeilen pro Seite:",
      next: "Weiter",
      prev: "Zurück",
      skip_nav: "Zum Inhalt springen",
      partial_page_range_info:
        "%{offsetBegin}-%{offsetEnd} von mehr als %{offsetEnd}",
      current_page: "Seite %{page}",
      page: "Gehe zu Seite %{page}",
      first: "Gehe zur ersten Seite",
      last: "Gehe zur letzten Seite",
      previous: "Gehe zur vorherigen Seite",
    },
    auth: {
      auth_check_error: "Bitte verbinden Sie sich, um fortzufahren",
      user_menu: "Profil",
      username: "Nutzername",
      password: "Passwort",
      email: 'Email',
      sign_in: "Anmelden",
      sign_in_error: "Fehler bei der Anmeldung",
      logout: "Abmelden",
    },
    notification: {
      updated:
        "Element wurde aktualisiert |||| %{smart_count} Elemente wurden aktualisiert",
      created: "Element wurde erstellt",
      deleted:
        "Element wurde gelöscht |||| %{smart_count} Elemente wurden gelöscht",
      bad_item: "Fehlerhaftes Element",
      item_doesnt_exist: "Das Element existiert nicht",
      http_error: "Fehler beim Kommunizieren mit dem Server",
      data_provider_error:
        "Fehler im dataProvider. Prüfe die Konsole für Details.",
      i18n_error:
        "Die Übersetzungen für die angegebene Sprache können nicht geladen werden.",
      canceled: "Aktion abgebrochen",
      logged_out:
        "Ihre Sitzung wurde beendet. Bitte verbinden Sie sich erneut.",
      not_authorized:
        "Sie sind nicht berechtigt, auf diese Ressource zuzugreifen.",
      application_update_available: 'Eine neue Version ist verfügbar.',
      offline: 'Keine Verbindung. Daten konnten nicht abgerufen werden.',
    },
    validation: {
      required: "Benötigt",
      minLength: "Muss mindestens %{min} Zeichen lang sein",
      maxLength: "Darf maximal %{max} Zeichen lang sein",
      minValue: "Muss mindestens %{min} sein",
      maxValue: "Muss %{max} oder weniger sein",
      number: "Muss eine Nummer sein",
      email: "Muss eine gültige E-Mail sein",
      oneOf: "Muss einer der folgenden Werte sein: %{options}",
      regex: "Muss dem folgenden regulären Ausdruck entsprechen: %{pattern}",
      unique: 'Muss einzigartig sein',
    },
    sort: {
      sort_by: "Sortieren nach %{field} %{order}",
      ASC: "aufsteigend",
      DESC: "absteigend",
    },
    saved_queries: {
      label: "Gespeicherte Abfragen",
      query_name: "Abfragenname",
      new_label: "Aktuelle Abfrage speichern...",
      new_dialog_title: "Aktuelle Abfrage speichern als",
      remove_label: "Gespeicherte Abfrage entfernen",
      remove_label_with_name: 'Abfrage "%{name}" entfernen',
      remove_dialog_title: "Gespeicherte Abfrage entfernen?",
      remove_message:
        "Möchten Sie dieses Element aus Ihrer Liste der gespeicherten Abfragen entfernen?",
      help: "Filtern Sie die Liste und speichern Sie diese Abfrage für später",
    },
    configurable: {
      customize: "Anpassen",
      configureMode: "Diese Seite konfigurieren",
      inspector: {
        title: "Inspektor",
        content:
          "Fahren Sie mit der Maus über die Anwendungselemente, um sie zu konfigurieren.",
        reset: "Einstellungen zurücksetzen",
        hideAll: "Alle ausblenden",
        showAll: "Alle anzeigen",
      },
      Datagrid: {
        title: "Datenraster",
        unlabeled: "Unbenannte Spalte #%{column}",
      },
      SimpleForm: {
        title: "Formular",
        unlabeled: "Unbenannte Eingabe #%{input}",
      },
      SimpleList: {
        title: "Liste",
        primaryText: "Primärer Text",
        secondaryText: "Sekundärer Text",
        tertiaryText: "Tertiärer Text",
      },
    },
  },
};
