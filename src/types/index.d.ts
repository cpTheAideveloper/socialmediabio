declare namespace AppTypes {
    interface OptimizedResponse {
      platform: string;
      tone: string;
      originalBio: string;
      variations: string[];
    }
  }
  
  export = AppTypes;
  export as namespace AppTypes;