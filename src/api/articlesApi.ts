
// This file handles fetching article content from your CMS or API

// You can replace this URL with your actual CMS or API endpoint
const API_BASE_URL = 'https://your-cms-api.com';

/**
 * Fetches the content of an article by its URL
 * In a real implementation, you might extract an article ID from the URL
 * or use another identifier to fetch the specific article
 */
export async function fetchArticleContent(articleUrl: string): Promise<string> {
  try {
    // For a real implementation, you might:
    // 1. Extract an ID from the URL (e.g., the slug)
    const articleId = extractArticleIdFromUrl(articleUrl);
    
    // 2. Make a request to your actual API endpoint
    const response = await fetch(`${API_BASE_URL}/articles/${articleId}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch article: ${response.status}`);
    }
    
    const data = await response.json();
    
    // 3. Return the formatted HTML content
    return formatArticleContent(data);
  } catch (error) {
    console.error('Error fetching article content:', error);
    throw error;
  }
}

/**
 * Helper function to extract an article ID from its URL
 * This is just an example - you would adapt this to your URL structure
 */
function extractArticleIdFromUrl(url: string): string {
  // Example: https://elevenlabs.io/blog/convin -> convin
  const parts = url.split('/');
  return parts[parts.length - 1];
}

/**
 * Helper function to format the article data into HTML
 * This would depend on your API's response structure
 */
function formatArticleContent(data: any): string {
  // Example format - adjust based on your actual API response
  return `
    <div class="article-content">
      <p class="text-lg mb-4">${data.introduction || ''}</p>
      ${data.sections?.map((section: any) => `
        ${section.heading ? `<h3 class="text-xl font-semibold mb-3">${section.heading}</h3>` : ''}
        ${section.paragraphs?.map((paragraph: string) => `
          <p class="mb-4">${paragraph}</p>
        `).join('') || ''}
      `).join('') || ''}
    </div>
  `;
}
