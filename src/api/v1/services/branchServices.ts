import { Branch } from "../../models/branchModel";
import * as firestoreRepository from "../../repositories/firestoreRepository";

const BRANCH_COLLECTION = "branches";

/**
 * Get all branches from Firestore.
 * @returns {Promise<Branch[]>} 
 * @throws {Error} - If Firestore retrieval fails.
 */
export const getAllBranches = async (): Promise<Branch[]> => {
    try {
        const branches = await firestoreRepository.getDocuments<Branch>(BRANCH_COLLECTION);
        return branches;
    } catch (error: unknown) {
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to fetch branches: ${errorMessage}`);
    }
};

/**
 * Get a single branch by its ID.
 * @param {string} id - The ID of the branch.
 * @returns {Promise<Branch>} - The branch document.
 * @throws {Error} - If the branch cannot be found or Firestore fails.
 */
export const getBranchById = async (id: string): Promise<Branch> => {
    try {
        const branch = await firestoreRepository.getDocumentById<Branch>(
            BRANCH_COLLECTION,
            id
        );

        if (!branch) {
            throw new Error(`Branch with ID ${id} not found.`);
        }

        return branch;
    } catch (error: unknown) {
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to fetch branch ${id}: ${errorMessage}`);
    }
};

/**
 * Creates a new branch document in Firestore.
 * @param {Branch} branchData - The new branch data.
 * @returns {Promise<Branch>} - The created branch document.
 * @throws {Error} - If Firestore creation fails.
 */
export const createBranch = async (branchData: Branch): Promise<Branch> => {
    try {
        const newBranch = await firestoreRepository.createDocument<Branch>(
            BRANCH_COLLECTION,
            branchData
        );
        return newBranch;
    } catch (error: unknown) {
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to create branch: ${errorMessage}`);
    }
};

/**
 * Updates an existing branch document.
 * @param {Branch} branchData - The updated branch data.
 * @returns {Promise<void>}
 * @throws {Error} - If validation or Firestore operation fails.
 */
export const updateBranch = async (branchData: Branch): Promise<void> => {
    try {
        await firestoreRepository.updateDocument(
            BRANCH_COLLECTION,
            branchData.id,
            branchData
        );
    } catch (error: unknown) {
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to update branch ${branchData.id}: ${errorMessage}`);
    }
};

/**
 * Deletes a branch document by its ID.
 * @param {string} id - The ID of the branch to delete.
 * @returns {Promise<void>}
 * @throws {Error} - If Firestore deletion fails.
 */
export const deleteBranch = async (id: string): Promise<void> => {
    try {
        await firestoreRepository.deleteDocument(BRANCH_COLLECTION, id);
    } catch (error: unknown) {
        const errorMessage =
            error instanceof Error ? error.message : "Unknown error";
        throw new Error(`Failed to delete branch ${id}: ${errorMessage}`);
    }
};
