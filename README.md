# oct24-t2w11-express-docker
Express app and MongoDB database all containerised.

Super cool stuff happening here! Check the `.github/workflows` folder for CI/CD!


## CI/CD Flow 

1. CI runs tests on all pushes to main branch 
2. CD (Docker Compose Linter) runs linter on all pushes that modify `Docker-compose.yml` on the main branch
3. CD (Docker Build & Deploy) runs after the previous workflows have completed successfully.



