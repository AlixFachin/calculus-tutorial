// Functions containing helper logic to deal with lessons collections
import { getCollection } from "astro:content"

export const getSlugForLessonId = async (lessonId: number) => {
    // We will get the corresponding collection item
    const lessons = await getCollection("lessons", ({ data} ) => data.index === lessonId  );
    if (lessons.length === 0) {
        return null;
    }
    const lessonItem = lessons[0];
    return lessonItem.data.slug;
}

export const getNeighboursSlugsForLessonId = async (lessonId: number) => {
    const lessons = await getCollection("lessons");
    const previousLessonSlug = lessonId === 1 ? null : lessons.find(( { data }) => data.index === lessonId - 1)?.data.slug || null; 
    const nextLessonSlug = lessons.find(({ data }) => data.index === lessonId + 1)?.data.slug || null;

    return {previousLessonSlug, nextLessonSlug};

};