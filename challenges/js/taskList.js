'use strict';

/**
 * List of tasks to accomplish.
 *
 * Fields:
 *   task.title (mandatory) - the actual task title, keep it short!
 *   task.photo (optional) - image URL, non-empty string means task is DONE
 *   task.photo1x (optional) - image URL for low-resolution displays
 *   task.photo2x (optional) - image URL for high-resolution displays
 *
 * Notes:
 *   1. Avoid long titles, they don't fit well!
 *   2. Both `photo1x` and `photo2x` are optional - `photo` is used as fallback.
 *      Their presence is necessary to reduce bandwidth and to speedup the
 *      loading of individual photos;
 */
angular.module('Alice').value('taskList', [
    {
        title: 'Avoir une fête de départ réussie',
        photo: null
    },
    {
        title: 'Arriver au Japon',
        photo: null
    },
    {
	title: 'Prendre un bain japonais (Onsen)',
	photo: null
    }
]);
