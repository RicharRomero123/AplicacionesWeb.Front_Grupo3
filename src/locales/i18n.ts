import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale:'es',
    messages:{
        en:{
            "_name":'Name',
            "_code":'Code',
            "_validate": 'Validate',
            "_category": 'Category',
            "_dateAdded": 'Date Added',
            "_quantity":'Quantity',
            "_description":'Description',
            "_digitalVersion":'Digital Version',
            "_status":'Status',
            "_active":'Active',
            "_suspended":'Suspended',
            "_inactive":'Inactive',
            "_save":'Save',
            "_cancel":'Cancel',

        },
        es:{
            "_name":'Nombre',
            "_code":'Código',
            "_validate":'Validar',
            "_category":'Categoría',
            "_dateAdded":'Fecha Agregada',
            "_quantity":'Cantidad',
            "_description":'Descripción',
            "_digitalVersion":'Versión digital',
            "_status":'Estado',
            "_active":'Activo',
            "_suspended":'Suspendido',
            "_inactive":'Inactivo',
            "_save":'Guardar',
            "_cancel":'Cancelar'
        },

        fr:{
            "_name":'Nom',
            "_code":'Code',
            "_validate":'Valider',
            "_category":'Catégorie',
            "_dateAdded":'Date ajoutée',
            "_quantity":'Quantité',
            "_description":'Description',
            "_digitalVersion":'Version numérique',
            "_status":'Statut',
            "_active":'Actif',
            "_suspended":'Suspendu',
            "_inactive":'Inactif',
            "_save":'Sauvegarder',
            "_cancel":'Annuler'
        },
    }
})

export  default  i18n;