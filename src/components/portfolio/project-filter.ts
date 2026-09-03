export interface ProjectFilterItem {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly tags: readonly string[];
}

export function filterProjects<T extends ProjectFilterItem>(
  projects: readonly T[],
  query: string,
  category: string,
): T[] {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const normalizedCategory = category.trim().toLocaleLowerCase();

  return projects.filter((project) => {
    const matchesCategory =
      normalizedCategory === "all" ||
      project.category.toLocaleLowerCase() === normalizedCategory;
    const searchableText = [project.title, project.category, ...project.tags]
      .join(" ")
      .toLocaleLowerCase();
    const matchesQuery =
      normalizedQuery.length === 0 || searchableText.includes(normalizedQuery);
    return matchesCategory && matchesQuery;
  });
}
